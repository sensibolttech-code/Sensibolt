import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-signin',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './signin.component.html',
    styleUrl: './signin.component.scss'
})
export class SignInComponent {
    signInForm!: FormGroup;
    submitted = false;
    loading = false;
    errorMessage: string | null = null;
    showPassword = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.initializeForm();
    }

    initializeForm(): void {
        this.signInForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    get f() {
        return this.signInForm.controls;
    }

    togglePasswordVisibility(): void {
        this.showPassword = !this.showPassword;
    }

    onSubmit(): void {
        this.submitted = true;
        this.errorMessage = null;

        if (this.signInForm.invalid) {
            return;
        }

        this.loading = true;
        const { email, password } = this.signInForm.value;

        this.authService.signIn(email, password).subscribe({
            next: (response) => {
                this.loading = false;
                console.log('Sign in successful', response);

                // Get return URL or default to dashboard home
                let returnUrl = '/dashboard/home';
                if (typeof window !== 'undefined') {
                    const storedUrl = sessionStorage.getItem('returnUrl');
                    if (storedUrl) {
                        returnUrl = storedUrl;
                        sessionStorage.removeItem('returnUrl');
                    }
                }

                this.router.navigateByUrl(returnUrl);
            },
            error: (error) => {
                this.loading = false;
                this.errorMessage = error.error?.message || 'Sign in failed. Please check your credentials.';
                console.error('Sign in error:', error);
            }
        });
    }

    resetForm(): void {
        this.signInForm.reset();
        this.submitted = false;
        this.errorMessage = null;
    }
}
