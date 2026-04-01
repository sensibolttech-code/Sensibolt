import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LayoutComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render layout structure', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('app-header')).toBeTruthy();
        expect(compiled.querySelector('router-outlet')).toBeTruthy();
        expect(compiled.querySelector('app-footer')).toBeTruthy();
    });

    it('should contain header component', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('app-header')).toBeTruthy();
    });

    it('should contain footer component', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('app-footer')).toBeTruthy();
    });

    it('should have router outlet for page content', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('router-outlet')).toBeTruthy();
    });
});
