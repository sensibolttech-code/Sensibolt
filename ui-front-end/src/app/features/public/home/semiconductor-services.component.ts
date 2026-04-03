import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ManufacturingMachine {
    id: number;
    name: string;
    description: string;
    icon: string;
    imageUrl: string;
    specifications: string[];
    capabilities: string[];
}

interface PCBBoard {
    id: number;
    name: string;
    description: string;
    type: string;
    imageUrl: string;
    features: string[];
    applications: string[];
}

interface SemiconductorService {
    id: number;
    name: string;
    description: string;
    icon: string;
    features: string[];
}

@Component({
    selector: 'app-semiconductor-services',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './semiconductor-services.component.html',
    styleUrl: './semiconductor-services.component.scss'
})
export class SemiconductorServicesComponent {
    manufacturingMachines: ManufacturingMachine[] = [
        {
            id: 1,
            name: 'Automated PCB Assembly Line (APAL-5000)',
            description: 'High-speed, precision surface mount assembly system designed for mass production of printed circuit boards.',
            icon: '⚙️',
            imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
            specifications: [
                'Placement speed: 50,000+ components/hour',
                'Accuracy: ±0.1mm',
                'Board size compatibility: 50mm × 50mm to 500mm × 500mm',
                'Vision-guided placement system'
            ],
            capabilities: [
                'Multi-layer board assembly',
                'BGA (Ball Grid Array) component placement',
                '0402 to large package handling',
                'Automated quality inspection'
            ]
        },
        {
            id: 2,
            name: 'Automated Solder Reflow Oven (ASRO-X)',
            description: 'Advanced thermal profiling reflow oven with precise temperature control for optimal solder joints.',
            icon: '🔥',
            imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
            specifications: [
                'Temperature range: 25°C to 300°C',
                'Heating zones: 10 independent zones',
                'Board width: up to 610mm',
                'Conveyor speed: Variable 0-3 m/min'
            ],
            capabilities: [
                'Lead-free solder profile optimization',
                'Real-time temperature monitoring',
                'Automated data logging and reporting',
                'Multiple profile storage and recall'
            ]
        },
        {
            id: 3,
            name: 'Wave Soldering System (WSS-PRO)',
            description: 'Professional wave soldering system for through-hole and mixed component assembly with advanced flux management.',
            icon: '🌊',
            imageUrl: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
            specifications: [
                'Conveyor width: 300-500mm',
                'Wave temperature: 250-260°C',
                'Solder pot capacity: 100+ liters',
                'Production rate: 3-5 meters/minute'
            ],
            capabilities: [
                'Through-hole component soldering',
                'Mixed technology assembly',
                'Flux recovery system',
                'Automated pallet and carrier systems'
            ]
        },
        {
            id: 4,
            name: 'Automated Optical Inspection (AOI-Pro)',
            description: 'Vision-based quality control system for detecting defects and ensuring assembly quality standards.',
            icon: '🔍',
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
            specifications: [
                'Resolution: 4K camera system',
                'Inspection speed: 60 boards/hour',
                'Defect detection size: as small as 0.2mm',
                'Database capacity: 100,000+ board profiles'
            ],
            capabilities: [
                'Solder joint quality verification',
                'Component placement verification',
                'Missing/wrong component detection',
                'Automated defect report generation'
            ]
        }
    ];

    pcbBoards: PCBBoard[] = [
        {
            id: 1,
            name: 'Industrial Control Board (ICB-2024)',
            description: 'Comprehensive control board for manufacturing equipment with real-time monitoring capabilities.',
            type: '4-Layer PCB',
            imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
            features: [
                '32-bit ARM Cortex-M4 processor',
                '256MB SDRAM',
                'Industrial-grade components',
                'Wide temperature range: -40°C to +85°C',
                'IPC Class 2 quality standard'
            ],
            applications: [
                'Manufacturing equipment control',
                'IoT device platforms',
                'Industrial automation',
                'Real-time monitoring systems'
            ]
        },
        {
            id: 2,
            name: 'Power Management Module (PMM-Elite)',
            description: 'Advanced power distribution and management board for high-performance industrial applications.',
            type: '6-Layer PCB',
            imageUrl: 'https://images.unsplash.com/photo-1545432099-6f552e5e5b36?w=600&h=400&fit=crop',
            features: [
                'Multi-output voltage regulation',
                'Input voltage: 12V to 48V DC',
                'Output capacity: 10A per channel',
                'Integrated protection circuits',
                'Thermal management with heat sinks'
            ],
            applications: [
                'Factory equipment power distribution',
                'UPS systems',
                'Industrial led lighting',
                'Backup power solutions'
            ]
        },
        {
            id: 3,
            name: 'Communication Interface Board (CIB-Pro)',
            description: 'Dedicated board for factory and IoT communication with multiple connectivity options.',
            type: '8-Layer PCB',
            imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
            features: [
                'Dual Gigabit Ethernet ports',
                '4G LTE modem integration',
                'WiFi 6 (802.11ax) support',
                'CAN bus interfaces',
                'Industrial-grade shielding'
            ],
            applications: [
                'Factory network connectivity',
                'Remote equipment monitoring',
                'Industry 4.0 implementations',
                'Real-time data transmission'
            ]
        },
        {
            id: 4,
            name: 'Sensor Integration Board (SIB-Max)',
            description: 'Multi-sensor integration platform for comprehensive facility and equipment monitoring.',
            type: '4-Layer PCB',
            imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
            features: [
                'Support for 16+ sensor types',
                'Analog/Digital/I2C interfaces',
                'Real-time data processing',
                'High-frequency data acquisition',
                'Integrated data logging'
            ],
            applications: [
                'Environmental monitoring',
                'Equipment condition monitoring',
                'Safety systems',
                'Predictive maintenance systems'
            ]
        }
    ];

    semiconductorServices: SemiconductorService[] = [
        {
            id: 1,
            name: 'PCB Design & Layout',
            description: 'Expert PCB design using advanced EDA tools and manufacturing constraints.',
            icon: '📐',
            features: [
                'Schematic design and simulation',
                'Multi-layer PCB routing',
                'Signal integrity analysis',
                'Thermal management design',
                'DFM (Design for Manufacturing) review'
            ]
        },
        {
            id: 2,
            name: 'Assembly & Manufacturing',
            description: 'High-precision board assembly with automated quality control.',
            icon: '🏭',
            features: [
                'Surface mount technology (SMT)',
                'Through-hole assembly',
                'Mixed technology assembly',
                'Automated optical inspection',
                'First-pass yield optimization'
            ]
        },
        {
            id: 3,
            name: 'Equipment Monitoring & Support',
            description: 'IT support and monitoring for all manufacturing equipment and systems.',
            icon: '📊',
            features: [
                'Real-time equipment monitoring',
                'Preventive maintenance scheduling',
                'Equipment health analytics',
                'Incident response and troubleshooting',
                '24/7 technical support'
            ]
        },
        {
            id: 4,
            name: 'Supply Chain Management',
            description: 'Comprehensive vendor and material management solutions.',
            icon: '📦',
            features: [
                'Component sourcing and procurement',
                'Inventory management',
                'Vendor performance tracking',
                'Compliance documentation',
                'Cost optimization'
            ]
        },
        {
            id: 5,
            name: 'Testing & Quality Assurance',
            description: 'Rigorous testing protocols ensuring manufacturing excellence.',
            icon: '✓',
            features: [
                'Functional testing',
                'Burn-in testing',
                'Environmental testing',
                'Compliance verification',
                'Detailed test reports'
            ]
        },
        {
            id: 6,
            name: 'IT Infrastructure & Security',
            description: 'Secure and reliable IT systems for manufacturing operations.',
            icon: '🔐',
            features: [
                'Network infrastructure',
                'Cybersecurity measures',
                'Data protection & compliance',
                'System uptime guarantee (99.9%)',
                'Disaster recovery planning'
            ]
        }
    ];

    selectedMachine: ManufacturingMachine | null = null;
    selectedBoard: PCBBoard | null = null;

    selectMachine(machine: ManufacturingMachine): void {
        this.selectedMachine = machine;
    }

    selectBoard(board: PCBBoard): void {
        this.selectedBoard = board;
    }

    clearSelection(): void {
        this.selectedMachine = null;
        this.selectedBoard = null;
    }

    scrollToMachines(): void {
        const element = document.querySelector('.machines-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
