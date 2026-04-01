import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
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
    services: Service[] = [
        {
            id: 1,
            title: 'Incident Management',
            description: 'Quickly report, prioritize, and resolve IT incidents with automated workflows.',
            icon: '🚨',
            features: [
                'Priority-based incident tracking',
                'Automated escalation',
                'Real-time notifications',
                'SLA management'
            ]
        },
        {
            id: 2,
            title: 'Service Request Management',
            description: 'Streamline service delivery with self-service portal and request tracking.',
            icon: '📝',
            features: [
                'Self-service portal',
                'Request approval workflow',
                'Automated fulfillment',
                'Status tracking'
            ]
        },
        {
            id: 3,
            title: 'Change Management',
            description: 'Control and coordinate IT changes with impact assessment and approval flow.',
            icon: '🔄',
            features: [
                'Change request workflow',
                'Impact analysis',
                'Risk assessment',
                'Audit trail'
            ]
        },
        {
            id: 4,
            title: 'Problem Management',
            description: 'Identify and resolve recurring issues to prevent future incidents.',
            icon: '🔍',
            features: [
                'Root cause analysis',
                'Trend analysis',
                'Problem tracking',
                'Knowledge base integration'
            ]
        },
        {
            id: 5,
            title: 'Asset Management',
            description: 'Track and manage IT assets throughout their lifecycle.',
            icon: '💻',
            features: [
                'Asset inventory',
                'License tracking',
                'Depreciation management',
                'Lifecycle tracking'
            ]
        },
        {
            id: 6,
            title: 'Knowledge Management',
            description: 'Create, organize, and share IT knowledge and solutions.',
            icon: '📚',
            features: [
                'Article management',
                'Knowledge base search',
                'Self-service solutions',
                'Community forums'
            ]
        }
    ];
}
