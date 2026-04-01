import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render welcome header', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to Sensibolt IT Services');
    });

    it('should render stats grid', () => {
        const compiled = fixture.nativeElement;
        const statCards = compiled.querySelectorAll('.stat-card');
        expect(statCards.length).toBeGreaterThan(0);
    });

    it('should render quick actions section', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.quick-actions')).toBeTruthy();
        expect(compiled.querySelectorAll('.action-btn').length).toBeGreaterThan(0);
    });

    it('should display stat values', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.stat-value')).toBeTruthy();
    });
});
