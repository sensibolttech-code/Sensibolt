import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
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
    services: Service[] = [
        {
            id: 1,
            title: 'Incident Management',
            description: 'Quickly report, prioritize, and resolve IT incidents with automated workflows.',
            icon: '🚨',
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop',
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
            imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
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
            imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop',
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
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
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
            imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop',
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
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop',
            features: [
                'Article management',
                'Knowledge base search',
                'Self-service solutions',
                'Community forums'
            ]
        }
    ];
}
