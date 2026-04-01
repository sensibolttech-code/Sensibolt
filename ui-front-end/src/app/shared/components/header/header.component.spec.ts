import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterLinkActive, RouterLink } from '@angular/router';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderComponent, RouterLink, RouterLinkActive]
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize with menu closed', () => {
        expect(component.isMenuOpen()).toBeFalsy();
    });

    it('should have navigation items', () => {
        expect(component.navItems().length).toBeGreaterThan(0);
    });

    it('should toggle menu', () => {
        expect(component.isMenuOpen()).toBeFalsy();
        component.toggleMenu();
        expect(component.isMenuOpen()).toBeTruthy();
        component.toggleMenu();
        expect(component.isMenuOpen()).toBeFalsy();
    });

    it('should close menu', () => {
        component.isMenuOpen.set(true);
        component.closeMenu();
        expect(component.isMenuOpen()).toBeFalsy();
    });

    it('should render header element', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('header')).toBeTruthy();
    });

    it('should have navigation items with correct properties', () => {
        const navItems = component.navItems();
        expect(navItems[0]).toEqual(jasmine.objectContaining({
            label: jasmine.any(String),
            route: jasmine.any(String)
        }));
    });

    it('should include New Ticket route', () => {
        const navItems = component.navItems();
        const newTicketItem = navItems.find(item => item.route === '/tickets/new');
        expect(newTicketItem).toBeTruthy();
    });

    it('should render navigation items on template', () => {
        const compiled = fixture.nativeElement;
        const navItems = compiled.querySelectorAll('a[routerLink]');
        expect(navItems.length).toBeGreaterThan(0);
    });
});
