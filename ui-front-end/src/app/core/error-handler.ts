import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Global Error Handler for Angular 21
 * Handles all unhandled errors in the application
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) { }

    handleError(error: Error | HttpErrorResponse): void {
        // Log to console in development
        console.error('Global Error Handler:', error);

        // Handle HTTP errors
        if (error instanceof HttpErrorResponse) {
            // Handle different HTTP status codes
            switch (error.status) {
                case 0:
                    console.error('Network error:', error.message);
                    break;
                case 400:
                    console.error('Bad Request:', error.message);
                    break;
                case 401:
                    console.error('Unauthorized:', error.message);
                    // Could redirect to login or refresh token here
                    break;
                case 403:
                    console.error('Forbidden:', error.message);
                    break;
                case 404:
                    console.error('Not Found:', error.message);
                    break;
                case 500:
                    console.error('Server Error:', error.message);
                    break;
                default:
                    console.error(`HTTP Error ${error.status}:`, error.message);
            }
        } else {
            // Handle client-side errors
            console.error('Client Error:', error.message);
        }

        // TODO: Send error to monitoring service (e.g., Sentry, LogRocket)
        // this.errorLoggingService.logError(error);
    }
}
