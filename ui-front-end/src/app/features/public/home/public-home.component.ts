import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-public-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './public-home.component.html',
    styleUrl: './public-home.component.scss'
})
export class PublicHomeComponent { }
