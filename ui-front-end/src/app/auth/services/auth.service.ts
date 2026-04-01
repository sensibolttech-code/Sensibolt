import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { signal } from '@angular/core';

interface AuthResponse {
    success: boolean;
    message: string;
    token: string;
    user: {
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
    private apiUrl = 'http://localhost:3000/auth';
    private currentUserSubject = new BehaviorSubject<any>(null);
    currentUser$ = this.currentUserSubject.asObservable();

    // Signal for reactive user state
    isAuthenticated = signal(false);
    user = signal<any>(null);

    constructor(private http: HttpClient) {
        this.loadUserFromStorage();
    }

    /**
     * Sign in with email and password
     */
    signIn(email: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.apiUrl}/signin`, { email, password })
            .pipe(
                tap(response => {
                    if (response.success && response.token) {
                        localStorage.setItem('token', response.token);
                        localStorage.setItem('user', JSON.stringify(response.user));
                        this.user.set(response.user);
                        this.isAuthenticated.set(true);
                        this.currentUserSubject.next(response.user);
                    }
                })
            );
    }

    /**
     * Register a new user
     */
    register(name: string, email: string, password: string, confirmPassword: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.apiUrl}/register`, {
            name,
            email,
            password,
            confirmPassword
        }).pipe(
            tap(response => {
                if (response.success && response.token) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('user', JSON.stringify(response.user));
                    this.user.set(response.user);
                    this.isAuthenticated.set(true);
                    this.currentUserSubject.next(response.user);
                }
            })
        );
    }

    /**
     * Sign out user
     */
    signOut(): void {
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
        return !!this.getToken();
    }
}
