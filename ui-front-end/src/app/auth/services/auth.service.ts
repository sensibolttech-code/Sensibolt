import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { signal } from '@angular/core';
import { Api, ValidationResponse } from '../../services/api';
import { environment } from '../../../environments/environment';

export interface AuthResponse extends ValidationResponse {
    token?: string;
    user?: {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject = new BehaviorSubject<any>(null);
    currentUser$ = this.currentUserSubject.asObservable();

    // Signal for reactive user state
    isAuthenticated = signal(false);
    user = signal<any>(null);

    constructor(private api: Api) {
        this.loadUserFromStorage();
        this.validateTokenOnInit();
    }

    /**
     * Sign in with email and password - with backend validation
     */
    signIn(email: string, password: string): Observable<AuthResponse> {
        return this.api.login({ email, password }).pipe(
            switchMap(response => {
                // Validate response and store data
                if (response.success && response.data?.token) {
                    localStorage.setItem('token', response.data.token);
                    if (response.data.user) {
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        this.user.set(response.data.user);
                    }
                    this.isAuthenticated.set(true);
                    this.currentUserSubject.next(response.data.user);

                    // Validate token with backend after login
                    return this.validateTokenWithBackend(response.data.token).pipe(
                        switchMap(validationResponse => {
                            if (validationResponse.success) {
                                return of(response as AuthResponse);
                            } else {
                                this.signOut();
                                throw new Error('Token validation failed');
                            }
                        }),
                        catchError(error => {
                            console.error('Token validation error:', error);
                            this.signOut();
                            throw error;
                        })
                    );
                } else {
                    throw new Error(response.message || 'Login failed');
                }
            }),
            catchError(error => {
                console.error('Sign in error:', error);
                this.signOut();
                throw error;
            })
        );
    }

    /**
     * Register a new user - with backend validation
     */
    register(name: string, email: string, password: string, confirmPassword: string): Observable<AuthResponse> {
        return this.api.register({
            name,
            email,
            password,
            confirmPassword
        }).pipe(
            switchMap(response => {
                if (response.success && response.data?.token) {
                    localStorage.setItem('token', response.data.token);
                    if (response.data.user) {
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        this.user.set(response.data.user);
                    }
                    this.isAuthenticated.set(true);
                    this.currentUserSubject.next(response.data.user);

                    // Validate token after registration
                    return this.validateTokenWithBackend(response.data.token).pipe(
                        switchMap(validationResponse => {
                            if (validationResponse.success) {
                                return of(response as AuthResponse);
                            } else {
                                this.signOut();
                                throw new Error('Token validation failed');
                            }
                        }),
                        catchError(error => {
                            this.signOut();
                            throw error;
                        })
                    );
                } else {
                    throw new Error(response.message || 'Registration failed');
                }
            }),
            catchError(error => {
                console.error('Registration error:', error);
                this.signOut();
                throw error;
            })
        );
    }

    /**
     * Validate token with backend
     */
    private validateTokenWithBackend(token: string): Observable<ValidationResponse> {
        return this.api.validateToken(token);
    }

    /**
     * Validate token on app initialization
     */
    private validateTokenOnInit(): void {
        const token = this.getToken();
        if (token) {
            this.api.validateToken(token).pipe(
                tap(response => {
                    if (!response.success) {
                        this.signOut();
                    }
                }),
                catchError(error => {
                    console.error('Token validation on init failed:', error);
                    this.signOut();
                    return of(null);
                })
            ).subscribe();
        }
    }

    /**
     * Refresh authentication token
     */
    refreshAuthToken(): Observable<ValidationResponse> {
        const token = this.getToken();
        if (!token) {
            return of({ success: false, message: 'No token available' });
        }
        return this.api.refreshToken(token).pipe(
            tap(response => {
                if (response.success && response.data?.token) {
                    localStorage.setItem('token', response.data.token);
                }
            }),
            catchError(error => {
                console.error('Token refresh error:', error);
                this.signOut();
                throw error;
            })
        );
    }

    /**
     * Get user profile from backend
     */
    getProfileFromBackend(): Observable<ValidationResponse> {
        return this.api.getProfile().pipe(
            tap(response => {
                if (response.success && response.data?.user) {
                    this.user.set(response.data.user);
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                }
            }),
            catchError(error => {
                console.error('Get profile error:', error);
                throw error;
            })
        );
    }

    /**
     * Sign out user
     */
    signOut(): void {
        // Call backend logout endpoint
        const token = this.getToken();
        if (token) {
            this.api.logout().pipe(
                catchError(error => {
                    console.error('Logout error:', error);
                    return of(null);
                })
            ).subscribe();
        }

        // Clear local storage and state
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.user.set(null);
        this.isAuthenticated.set(false);
        this.currentUserSubject.next(null);
    }

    /**
     * Get current token
     */
    getToken(): string | null {
        return typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    }

    /**
     * Load user from storage on app initialization
     */
    private loadUserFromStorage(): void {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            const userStr = localStorage.getItem('user');

            if (token && userStr) {
                try {
                    const user = JSON.parse(userStr);
                    this.user.set(user);
                    this.isAuthenticated.set(true);
                    this.currentUserSubject.next(user);
                } catch (error) {
                    console.error('Failed to parse user from storage', error);
                    this.signOut();
                }
            }
        }
    }

    /**
     * Check if user is authenticated
     */
    isLoggedIn(): boolean {
        return !!this.getToken() && this.isAuthenticated();
    }
}
