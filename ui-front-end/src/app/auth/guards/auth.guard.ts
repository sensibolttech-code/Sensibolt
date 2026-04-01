import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/**
 * Auth Guard Function (Modern Angular 21)
 * Protects routes that require authentication
 *
 * Usage in routes:
 * { path: 'tickets', component: TicketsComponent, canActivate: [authGuard] }
 */
export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    // Get the token from localStorage
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const router = inject(Router);

    // If token exists, user is authenticated
    if (token) {
        return true;
    }

    // If no token, redirect to signin page and store the attempted URL
    if (typeof window !== 'undefined') {
        sessionStorage.setItem('returnUrl', state.url);
    }
    router.navigate(['/auth/signin']);
    return false;
};

/**
 * Public Guard Function (Modern Angular 21)
 * Allows access to public auth pages (signin, register)
 * Only redirects already-authenticated users away from auth pages
 *
 * Usage in routes:
 * { path: 'auth/signin', component: SignInComponent, canActivate: [publicGuard] }
 */
export const publicGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const router = inject(Router);

    // If user is already authenticated, redirect to dashboard
    if (token) {
        router.navigate(['/dashboard/home']);
        return false;
    }

    // Allow unauthenticated users to access signin page
    return true;
};
