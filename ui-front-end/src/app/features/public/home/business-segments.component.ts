import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BusinessSegment {
    id: number;
    slug: string;
    name: string;
    title: string;
    description: string;
    icon: string;
    imageUrl: string;
    gradient: string;
    keyBenefits: string[];
    useCases: string[];
}

@Component({
    selector: 'app-business-segments',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './business-segments.component.html',
    styleUrl: './business-segments.component.scss'
})
export class BusinessSegmentsComponent {
    segments: BusinessSegment[] = [
        {
            id: 1,
            slug: 'digital-workplace',
            name: 'digital-workplace',
            title: 'Digital Workplace',
            description: 'Empower your workforce with modern IT support, secure device management, and seamless collaboration tools that keep people productive anywhere.',
            icon: 'pi-desktop',
            imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
            gradient: 'linear-gradient(135deg,#1e3a8a,#3b82f6)',
            keyBenefits: [
                'Unified service desk for all end-user requests',
                'Secure BYOD and corporate device policy enforcement',
                'Single sign-on and identity lifecycle management',
                'Real-time collaboration platform management',
                'Remote worker onboarding and support automation',
                'Zero-trust endpoint security framework'
            ],
            useCases: [
                'New employee IT onboarding in under 2 hours',
                'Automated password reset and access provisioning',
                'Device health monitoring and remote remediation',
                'Video conferencing platform rollout and support',
                'VPN and secure remote access management',
                'Software deployment and patch management'
            ]
        },
        {
            id: 2,
            slug: 'digital-infrastructure',
            name: 'digital-infrastructure',
            title: 'Digital Infrastructure',
            description: 'Build the resilient, scalable backbone your digital operations depend on — from hybrid cloud and virtualization to high-availability networks.',
            icon: 'pi-server',
            imageUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
            gradient: 'linear-gradient(135deg,#064e3b,#059669)',
            keyBenefits: [
                'Multi-cloud and on-premises infrastructure management',
                'Automated backup and disaster recovery orchestration',
                'Real-time infrastructure health dashboards',
                'Software-defined networking and micro-segmentation',
                'High-availability server and storage clustering',
                'Capacity planning and cost optimization'
            ],
            useCases: [
                'Cloud migration with zero-downtime cutovers',
                'DR drill automation and RTO/RPO validation',
                'Network performance tuning and bottleneck analysis',
                'Virtualisation consolidation to reduce hardware costs',
                'Storage tiering and lifecycle management',
                'Scheduled infrastructure health reviews'
            ]
        },
        {
            id: 3,
            slug: 'managed-it',
            name: 'managed-it',
            title: 'Managed IT Services',
            description: 'Hand off day-to-day IT operations to our certified engineers — 24×7 monitoring, proactive maintenance, and SLA-backed service delivery.',
            icon: 'pi-headphones',
            imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
            gradient: 'linear-gradient(135deg,#4c1d95,#7c3aed)',
            keyBenefits: [
                'Round-the-clock NOC monitoring with rapid escalation',
                'Proactive patch management and system hardening',
                'Managed endpoint detection and response (EDR)',
                'Application performance baselining and alerts',
                'Defined SLAs with transparent reporting',
                'Dedicated account manager and ITIL-aligned processes'
            ],
            useCases: [
                'Overnight infrastructure monitoring without in-house staff',
                'Monthly managed patch cycles with rollback capability',
                'Security event triage and incident response',
                'Business-hours application support with on-call escalation',
                'Quarterly IT health score and roadmap review',
                'Vendor management and contract SLA enforcement'
            ]
        },
        {
            id: 4,
            slug: 'audit-compliance',
            name: 'audit-compliance',
            title: 'Audit & Compliance',
            description: 'Stay ahead of regulatory obligations, security mandates, and cyber risk with structured audit programs and automated compliance tracking.',
            icon: 'pi-shield',
            imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
            gradient: 'linear-gradient(135deg,#1e3a8a,#0891b2)',
            keyBenefits: [
                'ISO 27001, SOC 2, and NIST framework alignment',
                'Automated vulnerability scanning and prioritisation',
                'Patch compliance dashboards by OS and application',
                'Risk register with impact and likelihood matrices',
                'Policy template library and approval workflows',
                'Audit trail and evidence collection automation'
            ],
            useCases: [
                'Pre-audit IT environment readiness assessment',
                'Continuous CVE monitoring and remediation tracking',
                'Quarterly patch compliance reporting to leadership',
                'Third-party vendor risk assessments',
                'Data classification and retention policy enforcement',
                'Regulatory change management and gap analysis'
            ]
        },
        {
            id: 5,
            slug: 'data-analytics',
            name: 'data-analytics',
            title: 'Data Analytics & Reporting',
            description: 'Transform operational data into executive-ready insights with live dashboards, automated reporting, and AI-assisted predictive models.',
            icon: 'pi-chart-bar',
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            gradient: 'linear-gradient(135deg,#0f172a,#1d4ed8)',
            keyBenefits: [
                'Real-time KPI dashboards with drill-down capability',
                'Pre-built ITSM and ops reporting templates',
                'Multi-source data pipeline orchestration',
                'Scheduled automated report distribution',
                'Predictive maintenance and trend modelling',
                'Role-based data access and governance'
            ],
            useCases: [
                'Live SLA breach alerting and resolution tracking',
                'Monthly executive IT performance summaries',
                'Cross-system data consolidation for audit reporting',
                'Predictive ticket volume forecasting for staffing',
                'Asset utilisation and cost attribution analytics',
                'Customer satisfaction trend analysis'
            ]
        },
        {
            id: 6,
            slug: 'smt-manufacturing',
            name: 'smt-manufacturing',
            title: 'SMT Manufacturing',
            description: 'End-to-end electronics manufacturing services — from PCB design and rapid prototyping through high-volume SMT assembly, testing, and delivery.',
            icon: 'pi-microchip',
            imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
            gradient: 'linear-gradient(135deg,#1c1917,#92400e)',
            keyBenefits: [
                'High-speed SMT and THT PCB assembly',
                'Rapid NPI prototyping with 48-hour turnaround',
                'Automated optical and X-ray inspection (AOI/AXI)',
                'Full traceability and serial number tracking',
                'IPC-A-610 Class 2 and Class 3 certified workmanship',
                'Turnkey EMS with component procurement'
            ],
            useCases: [
                'Low-volume prototype builds for R&D validation',
                'Mass production ramp from prototype approval',
                'PCB re-work and component-level repair',
                'Box-build assembly and final system integration',
                'Functional testing and burn-in services',
                'Embedded firmware flashing and programming'
            ]
        },
    ];

    selectedSegment: BusinessSegment | null = null;

    selectSegment(segment: BusinessSegment): void {
        this.selectedSegment = segment;
    }

    clearSelection(): void {
        this.selectedSegment = null;
    }
}
