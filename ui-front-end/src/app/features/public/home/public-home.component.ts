import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BusinessSegmentsComponent } from './business-segments.component';
import { SemiconductorServicesComponent } from './semiconductor-services.component';

@Component({
    selector: 'app-public-home',
    standalone: true,
    imports: [CommonModule, RouterLink, BusinessSegmentsComponent, SemiconductorServicesComponent],
    templateUrl: './public-home.component.html',
    styleUrl: './public-home.component.scss'
})
export class PublicHomeComponent { }
