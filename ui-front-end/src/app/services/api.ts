import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, timeout } from 'rxjs/operators';

export interface ValidationResponse {
  success: boolean;
  message: string;
  data?: any;
  errors?: string[];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface TokenValidationRequest {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseUrl = environment.apiUrl;
  private readonly apiEndpoints = environment.apiEndpoints;
  private readonly timeoutDuration = environment.timeout;
  private readonly retryAttempts = environment.retryAttempts;
  private readonly retryDelay = environment.retryDelay;

  constructor(private http: HttpClient) {}

  /**
   * AUTHENTICATION ENDPOINTS
   */

  /**
   * Login with email and password - Validates credentials with backend
   */
  login(credentials: LoginRequest): Observable<ValidationResponse> {
    const url = `${this.baseUrl}${this.apiEndpoints.login}`;
    return this.http.post<ValidationResponse>(url, credentials).pipe(
      timeout(this.timeoutDuration),
      retry(this.retryAttempts),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Register new user - Validates registration data with backend
   */
  register(userData: any): Observable<ValidationResponse> {
    const url = `${this.baseUrl}${this.apiEndpoints.register}`;
    return this.http.post<ValidationResponse>(url, userData).pipe(
      timeout(this.timeoutDuration),
      retry(this.retryAttempts),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Validate token with backend - Checks if token is still valid
   */
  validateToken(token?: string): Observable<ValidationResponse> {
    const url = `${this.baseUrl}${this.apiEndpoints.validateToken}`;
    const payload = token ? { token } : {};
    return this.http.post<ValidationResponse>(url, payload).pipe(
      timeout(this.timeoutDuration),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Refresh authentication token
   */
  refreshToken(token: string): Observable<ValidationResponse> {
    const url = `${this.baseUrl}${this.apiEndpoints.refreshToken}`;
    return this.http.post<ValidationResponse>(url, { token }).pipe(
      timeout(this.timeoutDuration),
      retry(this.retryAttempts),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Get user profile from backend
   */
  getProfile(): Observable<ValidationResponse> {
    const url = `${this.baseUrl}${this.apiEndpoints.profile}`;
    return this.http.get<ValidationResponse>(url).pipe(
      timeout(this.timeoutDuration),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Logout from backend
   */
  logout(): Observable<ValidationResponse> {
    const url = `${this.baseUrl}${this.apiEndpoints.logout}`;
    return this.http.post<ValidationResponse>(url, {}).pipe(
      timeout(this.timeoutDuration),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * GENERAL ENDPOINTS
   */

  // Example GET
  getHome(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`).pipe(
      timeout(this.timeoutDuration),
      catchError(error => this.handleError(error))
    );
  }

  // Example POST (Contact Form)
  sendContact(data: any): Observable<ValidationResponse> {
    return this.http.post<ValidationResponse>(`${this.baseUrl}/api/contact`, data).pipe(
      timeout(this.timeoutDuration),
      retry(this.retryAttempts),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Error handling for all API calls
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      // Backend error response
      if (error.status === 401) {
        errorMessage = 'Unauthorized: Please login again';
      } else if (error.status === 403) {
        errorMessage = 'Forbidden: You do not have permission';
      } else if (error.status === 404) {
        errorMessage = 'Not Found: The requested resource does not exist';
      } else if (error.status === 400) {
        errorMessage = error.error?.message || 'Bad Request: Invalid input data';
      } else if (error.status === 500) {
        errorMessage = 'Server Error: Please try again later';
      } else if (error.status === 0) {
        errorMessage = 'Network Error: Unable to connect to server';
      } else {
        errorMessage = error.error?.message || `Server Error: ${error.status}`;
      }
    }

    console.error('API Error:', errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }
}
