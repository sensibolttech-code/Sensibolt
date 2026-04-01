import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketsListComponent } from './tickets-list.component';

describe('TicketsListComponent', () => {
    let component: TicketsListComponent;
    let fixture: ComponentFixture<TicketsListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TicketsListComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(TicketsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render history header', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('IT Service Tickets');
    });

    it('should render search and filter controls', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.search-input')).toBeTruthy();
        expect(compiled.querySelectorAll('.filter-select').length).toBeGreaterThan(0);
    });

    it('should render expenses table', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.expenses-table')).toBeTruthy();
        expect(compiled.querySelector('thead')).toBeTruthy();
        expect(compiled.querySelector('tbody')).toBeTruthy();
    });

    it('should display empty state message', () => {
        const compiled = fixture.nativeElement;
        const emptyState = compiled.querySelector('.empty-state');
        expect(emptyState?.textContent).toContain('No tickets found');
    });
});
