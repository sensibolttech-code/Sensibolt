import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BusinessSegmentsComponent } from './business-segments.component';
import { SemiconductorServicesComponent } from './semiconductor-services.component';

interface BlogPost {
    id: number;
    category: string;
    categoryColor: string;
    title: string;
    excerpt: string;
    author: string;
    authorInitials: string;
    date: string;
    readTime: string;
    icon: string;
    imageUrl: string;
}

@Component({
    selector: 'app-public-home',
    standalone: true,
    imports: [CommonModule, RouterLink, BusinessSegmentsComponent, SemiconductorServicesComponent],
    templateUrl: './public-home.component.html',
    styleUrl: './public-home.component.scss'
})
export class PublicHomeComponent {
    recentPosts: BlogPost[] = [
        {
            id: 1,
            category: 'Digital Workplace',
            categoryColor: '#1e3a8a',
            title: 'How AI-Powered Service Desks Are Transforming IT Support in 2026',
            excerpt: 'From intelligent triage to auto-resolution, discover how modern service desks are using AI to cut MTTR by 60%.',
            author: 'Priya Nair',
            authorInitials: 'PN',
            date: 'Apr 8, 2026',
            readTime: '5 min read',
            icon: 'pi-headphones',
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=160&h=100&fit=crop',
        },
        {
            id: 2,
            category: 'SMT Manufacturing',
            categoryColor: '#92400e',
            title: 'Zero-Defect PCB Assembly: Quality Practices for High-Density Boards',
            excerpt: 'A deep dive into AOI, X-ray inspection, and SPC techniques that leading EMS providers use to achieve near-zero defect rates.',
            author: 'Raj Krishnan',
            authorInitials: 'RK',
            date: 'Apr 5, 2026',
            readTime: '7 min read',
            icon: 'pi-microchip',
            imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=160&h=100&fit=crop',
        },
        {
            id: 3,
            category: 'Audit & Compliance',
            categoryColor: '#1d4ed8',
            title: 'Preparing for ISO 27001:2025 — What IT Teams Need to Know',
            excerpt: 'The updated standard brings tighter controls around supply chain risk and cloud security. Here is your readiness checklist.',
            author: 'Anita Sharma',
            authorInitials: 'AS',
            date: 'Apr 2, 2026',
            readTime: '6 min read',
            icon: 'pi-shield',
            imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=160&h=100&fit=crop',
        },
        {
            id: 4,
            category: 'Data Analytics',
            categoryColor: '#0f172a',
            title: 'Real-Time KPI Dashboards: Turning Operational Data into Decisions',
            excerpt: 'Learn how Sensibolt customers use live dashboards to reduce SLA breaches and improve first-contact resolution rates.',
            author: 'Daniel Osei',
            authorInitials: 'DO',
            date: 'Mar 29, 2026',
            readTime: '4 min read',
            icon: 'pi-chart-bar',
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=160&h=100&fit=crop',
        },
    ];
}
