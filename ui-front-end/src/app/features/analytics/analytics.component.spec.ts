import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyticsComponent } from './analytics.component';

describe('AnalyticsComponent', () => {
    let component: AnalyticsComponent;
    let fixture: ComponentFixture<AnalyticsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AnalyticsComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AnalyticsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render reports header', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Reports & Analytics');
    });

    it('should render filter controls', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.analytics-filters')).toBeTruthy();
        expect(compiled.querySelector('.filter-select')).toBeTruthy();
    });

    it('should render charts section', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.analytics-charts')).toBeTruthy();
        expect(compiled.querySelector('.chart-placeholder')).toBeTruthy();
    });

    it('should render table section', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.analytics-table')).toBeTruthy();
        expect(compiled.querySelector('.table-placeholder')).toBeTruthy();
    });

    it('should have date range filter options', () => {
        const compiled = fixture.nativeElement;
        const select = compiled.querySelector('#dateRange');
        const options = select?.querySelectorAll('option');
        expect(options?.length).toBeGreaterThan(0);
    });
});
