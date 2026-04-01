import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Functional Auth Interceptor for Angular 21
 * Appends Bearer token to all HTTP requests
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
    // Get token from localStorage
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    // Clone the request and add authorization header if token exists
    if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    // Pass the request to the next handler
    return next(req);
};
