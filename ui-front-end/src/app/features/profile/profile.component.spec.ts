import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProfileComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render profile header', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Profile & Settings');
    });

    it('should render profile sections', () => {
        const compiled = fixture.nativeElement;
        const sections = compiled.querySelectorAll('.profile-section');
        expect(sections.length).toBeGreaterThan(0);
    });

    it('should display personal information section', () => {
        const compiled = fixture.nativeElement;
        const sections = compiled.querySelectorAll('.profile-section');
        expect(sections[0]?.textContent).toContain('Personal Information');
    });

    it('should display preferences section', () => {
        const compiled = fixture.nativeElement;
        const sections = compiled.querySelectorAll('.profile-section');
        expect(sections[1]?.textContent).toContain('Preferences');
    });

    it('should render info items', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.info-item')).toBeTruthy();
    });
});
