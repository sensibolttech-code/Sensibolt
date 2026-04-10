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
    slug: string;
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

    logoUrl: string = 'assets/images/Sensibolt-logo.png';
    activeCategoryIndex = 0;

    serviceCategories: ServiceCategory[] = [
        {
            label: 'Digital Workplace',
            icon: 'pi-desktop',
            slug: 'digital-workplace',
            subItems: [
                { label: 'Service Desk', icon: 'pi-headphones', description: 'Fast, reliable support for everyday IT issues' },
                { label: 'End-User Support', icon: 'pi-user', description: 'Assist users across devices and environments' },
                { label: 'Device & Endpoint Management', icon: 'pi-desktop', description: 'Secure and manage all user devices centrally' },
                { label: 'Collaboration Tools', icon: 'pi-comments', description: 'Enable seamless communication and teamwork' },
                { label: 'Identity & Access Management', icon: 'pi-lock', description: 'Control secure access to systems and data' },
                { label: 'Remote Work Enablement', icon: 'pi-wifi', description: 'Empower teams to work from anywhere securely' },
            ]
        },
        {
            label: 'Digital Infrastructure',
            icon: 'pi-server',
            slug: 'digital-infrastructure',
            subItems: [
                { label: 'Cloud Infrastructure', icon: 'pi-cloud', description: 'Scalable cloud environments tailored to your needs' },
                { label: 'Server & Storage', icon: 'pi-server', description: 'Reliable data storage and compute management' },
                { label: 'Network & Connectivity', icon: 'pi-sitemap', description: 'Secure and high-performance network setup' },
                { label: 'Virtualization', icon: 'pi-desktop', description: 'Optimize resources with virtual environments' },
                { label: 'Backup & Disaster Recovery', icon: 'pi-cloud-upload', description: 'Protect and recover critical business data' },
                { label: 'Infrastructure Monitoring', icon: 'pi-chart-bar', description: 'Real-time visibility into system performance' },
            ]
        },
        {
            label: 'Managed IT Services',
            icon: 'pi-headphones',
            slug: 'managed-it',
            subItems: [
                { label: '24×7 IT Support', icon: 'pi-clock', description: 'Round-the-clock monitoring and issue resolution' },
                { label: 'Remote Infrastructure Mgmt', icon: 'pi-desktop', description: 'Manage systems without on-site dependency' },
                { label: 'Managed Workplace', icon: 'pi-briefcase', description: 'End-to-end user environment management' },
                { label: 'Managed Security', icon: 'pi-shield', description: 'Continuous protection against cyber threats' },
                { label: 'Application Management', icon: 'pi-cog', description: 'Keep business apps running smoothly' },
                { label: 'SLA Management', icon: 'pi-check-circle', description: 'Ensure performance with defined service levels' },
            ]
        },
        {
            label: 'Audit & Compliance',
            icon: 'pi-shield',
            slug: 'audit-compliance',
            subItems: [
                { label: 'IT Audit', icon: 'pi-search', description: 'Evaluate IT systems against best practices' },
                { label: 'Vulnerability Assessment', icon: 'pi-exclamation-circle', description: 'Identify and prioritize security risks' },
                { label: 'Patch Compliance', icon: 'pi-refresh', description: 'Ensure systems are updated and secure' },
                { label: 'Risk Assessment', icon: 'pi-chart-bar', description: 'Analyze and mitigate operational risks' },
                { label: 'Regulatory Compliance', icon: 'pi-file', description: 'Meet industry and legal standards' },
                { label: 'Policy Documentation', icon: 'pi-book', description: 'Define and maintain IT governance policies' },
            ]
        },
        {
            label: 'Data Analytics',
            icon: 'pi-chart-bar',
            slug: 'data-analytics',
            subItems: [
                { label: 'Data Dashboards', icon: 'pi-chart-bar', description: 'Visualize business data in real time' },
                { label: 'Business Intelligence', icon: 'pi-desktop', description: 'Turn data into actionable insights' },
                { label: 'Reporting Automation', icon: 'pi-send', description: 'Generate reports without manual effort' },
                { label: 'Data Integration', icon: 'pi-sitemap', description: 'Unify data from multiple sources' },
                { label: 'KPI Tracking', icon: 'pi-tag', description: 'Monitor business performance effectively' },
                { label: 'Predictive Analytics', icon: 'pi-search', description: 'Forecast trends using advanced models' },
            ]
        },
        {
            label: 'SMT Manufacturing',
            icon: 'pi-microchip',
            slug: 'smt-manufacturing',
            subItems: [
                { label: 'PCB Assembly', icon: 'pi-microchip', description: 'High-precision SMT and THT assembly services' },
                { label: 'Prototyping', icon: 'pi-cog', description: 'Rapid development from concept to prototype' },
                { label: 'Testing & QA', icon: 'pi-check-circle', description: 'Ensure quality through rigorous testing' },
                { label: 'EMS Solutions', icon: 'pi-briefcase', description: 'End-to-end electronics manufacturing services' },
                { label: 'Embedded Integration', icon: 'pi-desktop', description: 'Integrate hardware with intelligent systems' },
            ]
        },
    ];

    get activeCategory(): ServiceCategory {
        return this.serviceCategories[this.activeCategoryIndex];
    }

    constructor(private router: Router) { }

    navigateToCategory(slug: string): void {
        this.router.navigate(['/public/services', slug]);
    }
}
