import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './signin.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('SignInComponent', () => {
    let component: SignInComponent;
    let fixture: ComponentFixture<SignInComponent>;
    let authService: jasmine.SpyObj<AuthService>;
    let router: jasmine.SpyObj<Router>;

    beforeEach(async () => {
        const authServiceSpy = jasmine.createSpyObj('AuthService', ['signIn']);
        const routerSpy = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);

        await TestBed.configureTestingModule({
            imports: [SignInComponent, ReactiveFormsModule, HttpClientTestingModule],
            providers: [
                { provide: AuthService, useValue: authServiceSpy },
                { provide: Router, useValue: routerSpy }
            ]
        }).compileComponents();

        authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
        router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

        fixture = TestBed.createComponent(SignInComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize form on ngOnInit', () => {
        expect(component.signInForm).toBeTruthy();
        expect(component.signInForm.get('email')).toBeTruthy();
        expect(component.signInForm.get('password')).toBeTruthy();
    });

    it('should have email field with required and email validators', () => {
        const emailControl = component.signInForm.get('email');

        emailControl?.setValue('');
        expect(emailControl?.hasError('required')).toBeTruthy();

        emailControl?.setValue('invalid-email');
        expect(emailControl?.hasError('email')).toBeTruthy();

        emailControl?.setValue('valid@example.com');
        expect(emailControl?.hasError('required')).toBeFalsy();
        expect(emailControl?.hasError('email')).toBeFalsy();
    });

    it('should have password field with required and minlength validators', () => {
        const passwordControl = component.signInForm.get('password');

        passwordControl?.setValue('');
        expect(passwordControl?.hasError('required')).toBeTruthy();

        passwordControl?.setValue('short');
        expect(passwordControl?.hasError('minlength')).toBeTruthy();

        passwordControl?.setValue('validpassword');
        expect(passwordControl?.hasError('required')).toBeFalsy();
        expect(passwordControl?.hasError('minlength')).toBeFalsy();
    });

    it('should toggle password visibility', () => {
        expect(component.showPassword).toBeFalsy();
        component.togglePasswordVisibility();
        expect(component.showPassword).toBeTruthy();
        component.togglePasswordVisibility();
        expect(component.showPassword).toBeFalsy();
    });

    it('should not submit form when invalid', () => {
        component.signInForm.patchValue({
            email: 'invalid-email',
            password: 'short'
        });

        component.onSubmit();
        expect(authService.signIn).not.toHaveBeenCalled();
    });

    it('should call authService.signIn on valid form submission', () => {
        authService.signIn.and.returnValue(of({
            user: { id: '1', email: 'test@example.com', name: 'Test User' },
            token: 'test-token',
            message: 'Sign in successful'
        }));

        component.signInForm.patchValue({
            email: 'test@example.com',
            password: 'ValidPassword123'
        });

        component.onSubmit();
        expect(authService.signIn).toHaveBeenCalledWith('test@example.com', 'ValidPassword123');
    });

    it('should navigate to home after successful sign in', (done) => {
        authService.signIn.and.returnValue(of({
            user: { id: '1', email: 'test@example.com', name: 'Test User' },
            token: 'test-token',
            message: 'Sign in successful'
        }));

        component.signInForm.patchValue({
            email: 'test@example.com',
            password: 'ValidPassword123'
        });

        component.onSubmit();

        setTimeout(() => {
            expect(router.navigateByUrl).toHaveBeenCalled();
            done();
        }, 100);
    });

    it('should display error message on sign in failure', (done) => {
        authService.signIn.and.returnValue(throwError(() => ({
            error: { message: 'Invalid credentials' }
        })));

        component.signInForm.patchValue({
            email: 'test@example.com',
            password: 'WrongPassword123'
        });

        component.onSubmit();

        setTimeout(() => {
            expect(component.errorMessage).toBeTruthy();
            done();
        }, 100);
    });

    it('should reset form', () => {
        component.signInForm.patchValue({
            email: 'test@example.com',
            password: 'password123'
        });
        component.submitted = true;

        component.resetForm();
        expect(component.signInForm.get('email')?.value).toBeNull();
        expect(component.signInForm.get('password')?.value).toBeNull();
        expect(component.submitted).toBeFalsy();
    });

    it('should render sign in form', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('form')).toBeTruthy();
        expect(compiled.querySelector('h1')?.textContent).toContain('Sign In');
    });
});
