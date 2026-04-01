import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

interface NavItem {
    label: string;
    route: string;
    icon?: string;
}

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    isMenuOpen = signal(false);
    showUserMenu = signal(false);

    navItems = signal<NavItem[]>([
        { label: 'Home', route: '/home', icon: 'pi-home' },
        { label: 'New Ticket', route: '/tickets/new', icon: 'pi-plus-circle' },
        { label: 'Tickets', route: '/tickets/list', icon: 'pi-list' },
        { label: 'Analytics', route: '/analytics', icon: 'pi-chart-bar' },
        { label: 'Service Types', route: '/service-types', icon: 'pi-folder' },
        { label: 'Profile / Settings', route: '/profile', icon: 'pi-cog' }
    ]);

    constructor(
        private router: Router
    ) { }

    toggleMenu(): void {
        this.isMenuOpen.set(!this.isMenuOpen());
    }

    closeMenu(): void {
        this.isMenuOpen.set(false);
    }

    toggleUserMenu(): void {
        this.showUserMenu.set(!this.showUserMenu());
    }

    closeUserMenu(): void {
        this.showUserMenu.set(false);
    }

    signOut(): void {
        this.closeMenu();
        this.closeUserMenu();
        this.router.navigate(['/auth/signin']);
    }
}
