import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/services/auth.service';

@Component({
    selector: 'app-public-layout',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
    templateUrl: './public-layout.component.html',
    styleUrl: './public-layout.component.scss'
})
export class PublicLayoutComponent {
    isAuthenticated: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        // Check if token exists in localStorage (only in browser)
        if (typeof window !== 'undefined') {
            this.isAuthenticated = !!localStorage.getItem('token');
        }
    }

    logout(): void {
        this.authService.signOut();
        this.isAuthenticated = false;
        if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
        this.router.navigate(['/']);
    }

    clearCache(): void {
        if (typeof window !== 'undefined') {
            localStorage.clear();
            sessionStorage.clear();
        }
        this.isAuthenticated = false;
        this.router.navigate(['/']);
        if (typeof window !== 'undefined') {
            window.location.reload();
        }
    }
}
