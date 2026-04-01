import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesComponent } from './categories.component';

describe('CategoriesComponent', () => {
    let component: CategoriesComponent;
    let fixture: ComponentFixture<CategoriesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CategoriesComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CategoriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render categories header', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Categories');
    });

    it('should render categories content', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.categories-content')).toBeTruthy();
    });
});
