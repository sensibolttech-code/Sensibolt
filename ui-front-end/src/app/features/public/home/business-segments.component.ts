import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BusinessSegment {
    id: number;
    name: string;
    title: string;
    description: string;
    icon: string;
    imageUrl: string;
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
            name: 'semiconductor',
            title: 'Semiconductor Board Manufacturing',
            description: 'Comprehensive IT and operational support for semiconductor manufacturing facilities. Ensure zero-downtime production, manage complex asset lifecycle, and optimize supply chain operations.',
            icon: '🔌',
            imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
            keyBenefits: [
                'Real-time equipment monitoring and maintenance scheduling',
                'Supply chain visibility and vendor management',
                'Compliance tracking (ISO, RoHS, ITAR)',
                'Production incident response and escalation',
                'Asset lifecycle management for expensive equipment',
                'Quality control and defect tracking integration'
            ],
            useCases: [
                'Rapid response to manufacturing line failures',
                'Preventive maintenance scheduling for critical equipment',
                'Inventory management for raw materials and components',
                'Regulatory compliance documentation and audit trails',
                'Cross-facility incident coordination and resolution',
                'Technical knowledge base for manufacturing processes'
            ]
        },
        {
            id: 2,
            name: 'finance',
            title: 'Financial Services',
            description: 'Enterprise-grade IT service management for financial institutions with strict compliance and security requirements.',
            icon: '💰',
            imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop',
            keyBenefits: [
                'Regulatory compliance (SOX, PCI-DSS, GDPR)',
                'Secure incident management with audit trails',
                'Business continuity and disaster recovery planning',
                'Multi-tenant service isolation'
            ],
            useCases: [
                'System outage management during trading hours',
                'Security incident response and containment',
                'Change management with compliance approval flows',
                'Vendor management and SLA tracking'
            ]
        },
        {
            id: 3,
            name: 'healthcare',
            title: 'Healthcare Systems',
            description: 'HIPAA-compliant IT service management for healthcare organizations to ensure uninterrupted patient care.',
            icon: '🏥',
            imageUrl: 'https://images.unsplash.com/photo-1576091160550-112173e7f870?w=600&h=400&fit=crop',
            keyBenefits: [
                'HIPAA compliance and audit readiness',
                'Emergency response protocols for patient systems',
                'Device and equipment tracking',
                'Staff access control and role management'
            ],
            useCases: [
                'Critical system failure response during patient care',
                'Device and equipment maintenance tracking',
                'Staff IT support with authentication security',
                'Compliance reporting for audits'
            ]
        },
        {
            id: 4,
            name: 'retail',
            title: 'Retail & E-Commerce',
            description: 'Scalable IT service management for retail operations spanning multiple locations and online platforms.',
            icon: '🛍️',
            imageUrl: 'https://images.unsplash.com/photo-1460925895917-adf4e565e479?w=600&h=400&fit=crop',
            keyBenefits: [
                'Multi-location service coordination',
                'Point-of-sale system support and management',
                'Online platform uptime monitoring',
                'Fast incident resolution to minimize sales impact'
            ],
            useCases: [
                'POS system troubleshooting and recovery',
                'E-commerce platform performance monitoring',
                'Inventory system synchronization',
                'Customer-facing service requests'
            ]
        }
    ];

    selectedSegment: BusinessSegment | null = null;

    selectSegment(segment: BusinessSegment): void {
        this.selectedSegment = segment;
    }

    clearSelection(): void {
        this.selectedSegment = null;
    }
}
