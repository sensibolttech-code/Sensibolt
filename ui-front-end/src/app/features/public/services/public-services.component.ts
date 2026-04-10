import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ServiceCategory {
    id: number;
    slug: string;
    title: string;
    tagline: string;
    icon: string;
    gradient: string;
    accentColor: string;
    iconBg: string;
    imageUrl: string;
    features: string[];
}

@Component({
    selector: 'app-public-services',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './public-services.component.html',
    styleUrl: './public-services.component.scss'
})
export class PublicServicesComponent {
    services: ServiceCategory[] = [
        {
            id: 1,
            slug: 'digital-workplace',
            title: 'Digital Workplace',
            tagline: 'Empowering people and productivity across modern work environments',
            icon: 'pi-desktop',
            gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
            accentColor: '#1e3a8a',
            iconBg: '#eff6ff',
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=320&fit=crop',
            features: ['Service Desk', 'End-User Support', 'Device & Endpoint Mgmt', 'Collaboration Tools', 'Identity & Access Mgmt', 'Remote Work Enablement']
        },
        {
            id: 2,
            slug: 'digital-infrastructure',
            title: 'Digital Infrastructure',
            tagline: 'Scalable, resilient backbone for your digital enterprise',
            icon: 'pi-server',
            gradient: 'linear-gradient(135deg, #064e3b, #059669)',
            accentColor: '#065f46',
            iconBg: '#ecfdf5',
            imageUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=320&fit=crop',
            features: ['Cloud Infrastructure', 'Server & Storage', 'Network & Connectivity', 'Virtualization', 'Backup & Disaster Recovery', 'Infrastructure Monitoring']
        },
        {
            id: 3,
            slug: 'managed-it',
            title: 'Managed IT Services',
            tagline: 'Expert-managed IT so your teams focus on what matters',
            icon: 'pi-headphones',
            gradient: 'linear-gradient(135deg, #4c1d95, #7c3aed)',
            accentColor: '#4c1d95',
            iconBg: '#f5f3ff',
            imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=320&fit=crop',
            features: ['24×7 IT Support', 'Remote Infrastructure Mgmt', 'Managed Workplace', 'Managed Security', 'Application Management', 'SLA Management']
        },
        {
            id: 4,
            slug: 'audit-compliance',
            title: 'Audit & Compliance',
            tagline: 'Full visibility and control over risk, regulation, and security',
            icon: 'pi-shield',
            gradient: 'linear-gradient(135deg, #1e3a8a, #0891b2)',
            accentColor: '#1e40af',
            iconBg: '#eff6ff',
            imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=320&fit=crop',
            features: ['IT Audit', 'Vulnerability Assessment', 'Patch Compliance', 'Risk Assessment', 'Regulatory Compliance', 'Policy Documentation']
        },
        {
            id: 5,
            slug: 'data-analytics',
            title: 'Data Analytics & Reporting',
            tagline: 'Turn raw data into strategic insights for better decisions',
            icon: 'pi-chart-bar',
            gradient: 'linear-gradient(135deg, #0f172a, #1d4ed8)',
            accentColor: '#1d4ed8',
            iconBg: '#eff6ff',
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=320&fit=crop',
            features: ['Data Dashboards', 'Business Intelligence', 'Reporting Automation', 'Data Integration', 'KPI Tracking', 'Predictive Analytics']
        },
        {
            id: 6,
            slug: 'smt-manufacturing',
            title: 'SMT Manufacturing',
            tagline: 'Precision electronics manufacturing from concept to production',
            icon: 'pi-microchip',
            gradient: 'linear-gradient(135deg, #1c1917, #92400e)',
            accentColor: '#92400e',
            iconBg: '#fff7ed',
            imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=320&fit=crop',
            features: ['PCB Assembly', 'Prototyping', 'Testing & QA', 'EMS Solutions', 'Embedded Integration']
        },
    ];
}
