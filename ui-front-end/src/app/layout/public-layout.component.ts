import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface ServiceSubItem {
    label: string;
    icon: string;
    description: string;
}

export interface ServiceCategory {
    label: string;
    icon: string;
    subItems: ServiceSubItem[];
}

@Component({
    selector: 'app-public-layout',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
    templateUrl: './public-layout.component.html',
    styleUrl: './public-layout.component.scss'
})
export class PublicLayoutComponent {

    activeCategoryIndex = 0;

    serviceCategories: ServiceCategory[] = [
        {
            label: 'Service Desk',
            icon: 'pi-headphones',
            subItems: [
                { label: 'Incident Management', icon: 'pi-exclamation-circle', description: 'Log, track and resolve incidents fast' },
                { label: 'Service Requests', icon: 'pi-file-edit', description: 'Manage end-user service requests' },
                { label: 'Self-Service Portal', icon: 'pi-user', description: 'Empower users with self-help options' },
                { label: 'Live Chat Support', icon: 'pi-comments', description: 'Real-time agent-assisted support' },
            ]
        },
        {
            label: 'IT Operations',
            icon: 'pi-cog',
            subItems: [
                { label: 'Change Management', icon: 'pi-refresh', description: 'Plan and govern all IT changes' },
                { label: 'Problem Management', icon: 'pi-search', description: 'Identify and eliminate root causes' },
                { label: 'Event Management', icon: 'pi-bell', description: 'Monitor and respond to IT events' },
                { label: 'Release Management', icon: 'pi-send', description: 'Coordinate software and hardware releases' },
            ]
        },
        {
            label: 'Asset & CMDB',
            icon: 'pi-desktop',
            subItems: [
                { label: 'Asset Management', icon: 'pi-desktop', description: 'Track hardware and software assets' },
                { label: 'CMDB', icon: 'pi-sitemap', description: 'Configuration item relationships' },
                { label: 'Software Licenses', icon: 'pi-id-card', description: 'Manage license compliance' },
                { label: 'Procurement', icon: 'pi-shopping-cart', description: 'Streamline IT procurement workflows' },
            ]
        },
        {
            label: 'Knowledge & Docs',
            icon: 'pi-book',
            subItems: [
                { label: 'Knowledge Base', icon: 'pi-book', description: 'Centralized IT knowledge repository' },
                { label: 'Documentation', icon: 'pi-file', description: 'Technical and process documentation' },
                { label: 'FAQs & Guides', icon: 'pi-question-circle', description: 'Step-by-step guides for common tasks' },
                { label: 'Training Portal', icon: 'pi-graduation-cap', description: 'Onboarding and skill-building resources' },
            ]
        },
        {
            label: 'Semiconductor',
            icon: 'pi-microchip',
            subItems: [
                { label: 'Wafer Fabrication', icon: 'pi-cog', description: 'Fab operations and yield management' },
                { label: 'EDA & IC Design', icon: 'pi-desktop', description: 'EDA tool and compute cluster management' },
                { label: 'Supply Chain', icon: 'pi-sitemap', description: 'Global semiconductor logistics visibility' },
                { label: 'Quality Management', icon: 'pi-check-circle', description: 'Defect tracking and quality assurance' },
            ]
        },
    ];

    get activeCategory(): ServiceCategory {
        return this.serviceCategories[this.activeCategoryIndex];
    }

    constructor(private router: Router) { }

    navigateToServices(): void {
        this.router.navigate(['/public/services']);
    }
}
