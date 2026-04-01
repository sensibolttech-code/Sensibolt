import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-public-about',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './public-about.component.html',
    styleUrl: './public-about.component.scss'
})
export class PublicAboutComponent { }
