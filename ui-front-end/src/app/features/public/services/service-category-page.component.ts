import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

interface ServiceItem {
    title: string;
    description: string;
    icon: string;
}

interface CategoryData {
    title: string;
    tagline: string;
    heroIcon: string;
    gradient: string;
    accentColor: string;
    iconBg: string;
    services: ServiceItem[];
}

const CATEGORY_DATA: Record<string, CategoryData> = {
    'digital-workplace': {
        title: 'Digital Workplace',
        tagline: 'Empowering people and productivity across modern work environments',
        heroIcon: 'pi-desktop',
        gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        accentColor: '#1e3a8a',
        iconBg: '#eff6ff',
        services: [
            { title: 'Service Desk', icon: 'pi-headphones', description: 'Fast, reliable support for everyday IT issues' },
            { title: 'End-User Support', icon: 'pi-user', description: 'Assist users across devices and environments' },
            { title: 'Device & Endpoint Management', icon: 'pi-desktop', description: 'Secure and manage all user devices centrally' },
            { title: 'Collaboration Tools', icon: 'pi-comments', description: 'Enable seamless communication and teamwork' },
            { title: 'Identity & Access Management', icon: 'pi-lock', description: 'Control secure access to systems and data' },
            { title: 'Remote Work Enablement', icon: 'pi-wifi', description: 'Empower teams to work from anywhere securely' },
        ]
    },
    'digital-infrastructure': {
        title: 'Digital Infrastructure',
        tagline: 'Building the resilient, scalable backbone of your digital enterprise',
        heroIcon: 'pi-server',
        gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 100%)',
        accentColor: '#065f46',
        iconBg: '#ecfdf5',
        services: [
            { title: 'Cloud Infrastructure', icon: 'pi-cloud', description: 'Scalable cloud environments tailored to your needs' },
            { title: 'Server & Storage', icon: 'pi-server', description: 'Reliable data storage and compute management' },
            { title: 'Network & Connectivity', icon: 'pi-sitemap', description: 'Secure and high-performance network setup' },
            { title: 'Virtualization', icon: 'pi-desktop', description: 'Optimize resources with virtual environments' },
            { title: 'Backup & Disaster Recovery', icon: 'pi-cloud-upload', description: 'Protect and recover critical business data' },
            { title: 'Infrastructure Monitoring', icon: 'pi-chart-bar', description: 'Real-time visibility into system performance' },
        ]
    },
    'managed-it': {
        title: 'Managed IT Services',
        tagline: 'Expert-managed IT operations so your teams can focus on what matters most',
        heroIcon: 'pi-headphones',
        gradient: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)',
        accentColor: '#4c1d95',
        iconBg: '#f5f3ff',
        services: [
            { title: '24×7 IT Support', icon: 'pi-clock', description: 'Round-the-clock monitoring and issue resolution' },
            { title: 'Remote Infrastructure Mgmt', icon: 'pi-desktop', description: 'Manage systems without on-site dependency' },
            { title: 'Managed Workplace', icon: 'pi-briefcase', description: 'End-to-end user environment management' },
            { title: 'Managed Security', icon: 'pi-shield', description: 'Continuous protection against cyber threats' },
            { title: 'Application Management', icon: 'pi-cog', description: 'Keep business apps running smoothly' },
            { title: 'SLA Management', icon: 'pi-check-circle', description: 'Ensure performance with defined service levels' },
        ]
    },
    'audit-compliance': {
        title: 'Audit & Compliance',
        tagline: 'Stay ahead of risk, regulation, and security with full visibility and control',
        heroIcon: 'pi-shield',
        gradient: 'linear-gradient(135deg, #1e3a8a 0%, #0891b2 100%)',
        accentColor: '#1e40af',
        iconBg: '#eff6ff',
        services: [
            { title: 'IT Audit', icon: 'pi-search', description: 'Evaluate IT systems against best practices' },
            { title: 'Vulnerability Assessment', icon: 'pi-exclamation-circle', description: 'Identify and prioritize security risks' },
            { title: 'Patch Compliance', icon: 'pi-refresh', description: 'Ensure systems are updated and secure' },
            { title: 'Risk Assessment', icon: 'pi-chart-bar', description: 'Analyze and mitigate operational risks' },
            { title: 'Regulatory Compliance', icon: 'pi-file', description: 'Meet industry and legal standards' },
            { title: 'Policy Documentation', icon: 'pi-book', description: 'Define and maintain IT governance policies' },
        ]
    },
    'data-analytics': {
        title: 'Data Analytics & Reporting',
        tagline: 'Turn raw data into strategic insights that drive better business decisions',
        heroIcon: 'pi-chart-bar',
        gradient: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)',
        accentColor: '#1d4ed8',
        iconBg: '#eff6ff',
        services: [
            { title: 'Data Dashboards', icon: 'pi-chart-bar', description: 'Visualize business data in real time' },
            { title: 'Business Intelligence', icon: 'pi-desktop', description: 'Turn data into actionable insights' },
            { title: 'Reporting Automation', icon: 'pi-send', description: 'Generate reports without manual effort' },
            { title: 'Data Integration', icon: 'pi-sitemap', description: 'Unify data from multiple sources' },
            { title: 'KPI Tracking', icon: 'pi-tag', description: 'Monitor business performance effectively' },
            { title: 'Predictive Analytics', icon: 'pi-search', description: 'Forecast trends using advanced models' },
        ]
    },
    'smt-manufacturing': {
        title: 'SMT Manufacturing',
        tagline: 'Precision electronics manufacturing from concept to production',
        heroIcon: 'pi-microchip',
        gradient: 'linear-gradient(135deg, #1c1917 0%, #92400e 100%)',
        accentColor: '#92400e',
        iconBg: '#fff7ed',
        services: [
            { title: 'PCB Assembly', icon: 'pi-microchip', description: 'High-precision SMT and THT assembly services' },
            { title: 'Prototyping', icon: 'pi-cog', description: 'Rapid development from concept to prototype' },
            { title: 'Testing & QA', icon: 'pi-check-circle', description: 'Ensure quality through rigorous testing' },
            { title: 'EMS Solutions', icon: 'pi-briefcase', description: 'End-to-end electronics manufacturing services' },
            { title: 'Embedded Integration', icon: 'pi-desktop', description: 'Integrate hardware with intelligent systems' },
        ]
    },
};

@Component({
    selector: 'app-service-category-page',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './service-category-page.component.html',
    styleUrl: './service-category-page.component.scss'
})
export class ServiceCategoryPageComponent implements OnInit {
    category: CategoryData | null = null;
    notFound = false;

    constructor(private route: ActivatedRoute, private titleService: Title) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const slug = params.get('category') ?? '';
            this.category = CATEGORY_DATA[slug] ?? null;
            this.notFound = !this.category;
            if (this.category) {
                this.titleService.setTitle(`${this.category.title} | Sensibolt`);
            }
        });
    }
}
