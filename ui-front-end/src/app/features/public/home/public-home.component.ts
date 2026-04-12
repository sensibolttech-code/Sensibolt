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

interface CarouselSlide {
    title: string;
    subtitle: string;
    badge: string;
    icon: string;
    button1Text: string;
    button1Link: string;
    button2Text: string;
    button2Link: string;
    imageUrl: string;
    gradient: string;
}

@Component({
    selector: 'app-public-home',
    standalone: true,
    imports: [CommonModule, RouterLink, BusinessSegmentsComponent, SemiconductorServicesComponent],
    templateUrl: './public-home.component.html',
    styleUrl: './public-home.component.scss'
})
export class PublicHomeComponent {
    carouselSlides: CarouselSlide[] = [
        {
            badge: 'Digital Workplace',
            title: 'Modern Digital Workplace Solutions',
            subtitle: 'Empower teams with seamless collaboration, secure device management, and efficient end-user support.',
            icon: 'pi-desktop',
            button1Text: 'Explore Services',
            button1Link: '/public/services/digital-workplace',
            button2Text: 'Get Started',
            button2Link: '/auth/signin',
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
            gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'
        },
        {
            badge: 'Digital Infrastructure',
            title: 'Robust & Scalable IT Infrastructure',
            subtitle: 'Cloud, servers, storage, and networking solutions built for performance, security, and reliability.',
            icon: 'pi-server',
            button1Text: 'View Infrastructure',
            button1Link: '/public/services/digital-infrastructure',
            button2Text: 'Get Started',
            button2Link: '/auth/signin',
            imageUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=500&fit=crop',
            gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 100%)'
        },
        {
            badge: 'Managed IT Services',
            title: '24/7 Managed IT Services',
            subtitle: 'Proactive monitoring, maintenance, and SLA-driven support to keep your business running smoothly.',
            icon: 'pi-headphones',
            button1Text: 'Get Support',
            button1Link: '/public/services/managed-it',
            button2Text: 'Get Started',
            button2Link: '/auth/signin',
            imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop',
            gradient: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)'
        },
        {
            badge: 'Audit & Compliance',
            title: 'IT Audit & Compliance Assurance',
            subtitle: 'Identify risks, ensure compliance, and strengthen your IT systems with expert assessments.',
            icon: 'pi-shield',
            button1Text: 'Start Audit',
            button1Link: '/public/services/audit-compliance',
            button2Text: 'Get Started',
            button2Link: '/auth/signin',
            imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop',
            gradient: 'linear-gradient(135deg, #1e3a8a 0%, #0891b2 100%)'
        },
        {
            badge: 'Data Analytics & Reporting',
            title: 'Data-Driven Insights & Analytics',
            subtitle: 'Transform raw data into actionable insights with dashboards, KPIs, and predictive analytics.',
            icon: 'pi-chart-bar',
            button1Text: 'View Analytics',
            button1Link: '/public/services/data-analytics',
            button2Text: 'Get Started',
            button2Link: '/auth/signin',
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
            gradient: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)'
        },
        {
            badge: 'SMT Manufacturing',
            title: 'Precision SMT Manufacturing Solutions',
            subtitle: 'High-quality PCB assembly, prototyping, and embedded system integration for modern electronics.',
            icon: 'pi-microchip',
            button1Text: 'Explore Manufacturing',
            button1Link: '/public/services/smt-manufacturing',
            button2Text: 'Get Started',
            button2Link: '/auth/signin',
            imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop',
            gradient: 'linear-gradient(135deg, #1c1917 0%, #92400e 100%)'
        }
    ];
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
