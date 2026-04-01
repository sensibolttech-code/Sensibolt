import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTicketComponent } from './add-ticket.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddTicketComponent', () => {
    let component: AddTicketComponent;
    let fixture: ComponentFixture<AddTicketComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AddTicketComponent, ReactiveFormsModule]
        }).compileComponents();

        fixture = TestBed.createComponent(AddTicketComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize form on ngOnInit', () => {
        expect(component.ticketForm).toBeTruthy();
        expect(component.ticketForm.get('userId')?.value).toBe(101);
    });

    it('should have required validators on mandatory fields', () => {
        const ticketType = component.ticketForm.get('ticketType');
        expect(ticketType?.hasError('required')).toBeTruthy();

        ticketType?.setValue('1');
        expect(ticketType?.hasError('required')).toBeFalsy();
    });

    it('should validate priority field', () => {
        const priority = component.ticketForm.get('priority');

        priority?.setValue('');
        expect(priority?.hasError('required')).toBeTruthy();

        priority?.setValue('high');
        expect(priority?.valid).toBeTruthy();
    });

    it('should validate maxlength on title', () => {
        const title = component.ticketForm.get('title');
        const longText = 'a'.repeat(101);

        title?.setValue(longText);
        expect(title?.hasError('maxlength')).toBeTruthy();

        title?.setValue('Valid title');
        expect(title?.hasError('maxlength')).toBeFalsy();
    });

    it('should handle file selection', () => {
        const file = new File(['test content'], 'test.pdf', { type: 'application/pdf' });
        const event = {
            target: {
                files: [file]
            }
        };

        component.onFileSelected(event);
        expect(component.selectedFile).toBe(file);
    });

    it('should reject invalid file types', () => {
        const file = new File(['test content'], 'test.txt', { type: 'text/plain' });
        const event = {
            target: {
                files: [file],
                value: 'test.txt'
            }
        };

        spyOn(window, 'alert');
        component.onFileSelected(event);
        expect(window.alert).toHaveBeenCalled();
        expect(component.selectedFile).toBeNull();
    });

    it('should clear file selection', () => {
        component.selectedFile = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
        component.previewUrl = 'data:image/jpeg;base64,...';

        component.clearFile();
        expect(component.selectedFile).toBeNull();
        expect(component.previewUrl).toBeNull();
    });

    it('should reset form', () => {
        component.ticketForm.patchValue({
            ticketType: '1',
            priority: 'medium'
        });

        component.resetForm();
        expect(component.ticketForm.get('userId')?.value).toBe(101);
        expect(component.expenseForm.get('categoryId')?.value).toBeNull();
        expect(component.submitted).toBeFalsy();
    });

    it('should render form on template', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('form')).toBeTruthy();
        expect(compiled.querySelector('h1')?.textContent).toContain('Add Expense');
    });
});
