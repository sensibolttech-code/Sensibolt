import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PublicLayoutComponent } from './layout/public-layout.component';
import { HomeComponent } from './features/home/home.component';
import { PublicHomeComponent } from './features/public/home/public-home.component';
import { PublicServicesComponent } from './features/public/services/public-services.component';
import { PublicAboutComponent } from './features/public/about/public-about.component';
import { AddTicketComponent } from './features/tickets/add-ticket.component';
import { TicketsListComponent } from './features/tickets/tickets-list.component';
import { AnalyticsComponent } from './features/analytics/analytics.component';
import { ServiceTypesComponent } from './features/service-types/service-types.component';
import { ProfileComponent } from './features/profile/profile.component';
import { SignInComponent } from './auth/components/signin.component';
import { authGuard, publicGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
    // Public routes (no authentication required)
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: '', component: PublicHomeComponent },
            { path: 'public/services', component: PublicServicesComponent },
            { path: 'public/about', component: PublicAboutComponent }
        ]
    },
    // Auth routes (public - redirects to home if already authenticated)
    {
        path: 'auth',
        children: [
            { path: 'signin', component: SignInComponent, canActivate: [publicGuard] },
        ]
    },
    // Main app routes (protected - requires authentication)
    {
        path: 'dashboard',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            {
                path: 'tickets', children: [
                    { path: 'new', component: AddTicketComponent, canActivate: [authGuard] },
                    { path: 'list', component: TicketsListComponent }
                ]
            },
            { path: 'analytics', component: AnalyticsComponent },
            { path: 'service-types', component: ServiceTypesComponent },
            { path: 'profile', component: ProfileComponent }
        ]
    },
    // Fallback redirect
    { path: '**', redirectTo: '' }
];
