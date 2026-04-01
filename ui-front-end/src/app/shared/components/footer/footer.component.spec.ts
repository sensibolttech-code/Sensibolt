import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FooterComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render footer element', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('footer')).toBeTruthy();
    });

    it('should display footer content', () => {
        const compiled = fixture.nativeElement;
        const footer = compiled.querySelector('footer');
        expect(footer).toBeTruthy();
    });

    it('should have footer-content class', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.footer-content')).toBeTruthy();
    });
});
