import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface TicketType {
  id: string;
  name: string;
}

@Component({
  selector: 'app-add-ticket',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.scss'
})
export class AddTicketComponent {
  @ViewChild('attachmentInput') attachmentInput!: ElementRef<HTMLInputElement>;

  ticketForm!: FormGroup;
  submitted = false;
  selectedFile: File | null = null;
  previewUrl: string | null = null;

  // Mock data - Replace with API calls
  ticketTypes: TicketType[] = [
    { id: '1', name: 'Bug Report' },
    { id: '2', name: 'Feature Request' },
    { id: '3', name: 'Support Request' },
    { id: '4', name: 'Infrastructure Issue' },
    { id: '5', name: 'Security Issue' },
    { id: '6', name: 'Performance Issue' },
    { id: '7', name: 'Other' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.ticketForm = this.formBuilder.group({
      userId: [101, [Validators.required]], // Hidden field
      ticketType: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(2000)]],
      department: [''],
      attachment: ['']
    });
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.ticketForm.controls;
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      // Validate file type (accept documents and images)
      const validFileTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/gif', 'image/webp',
        'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validFileTypes.includes(file.type)) {
        alert('Please upload a valid file (PDF, JPEG, PNG, GIF, WebP, DOC, or DOCX)');
        event.target.value = '';
        return;
      }

      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        alert('File size must be less than 10MB');
        event.target.value = '';
        return;
      }

      this.selectedFile = file;
      this.previewUrl = file.name;
    }
  }

  clearFile(): void {
    this.selectedFile = null;
    this.previewUrl = null;
    // Use template reference instead of document.getElementById
    if (this.attachmentInput) {
      this.attachmentInput.nativeElement.value = '';
    }
  }

  onSubmit(): void {
    this.submitted = true;

    // Stop if form is invalid
    if (this.ticketForm.invalid) {
      return;
    }

    // Prepare form data
    const formData = new FormData();

    // Add all form fields
    Object.keys(this.ticketForm.value).forEach(key => {
      if (key !== 'attachment') {
        formData.append(key, this.ticketForm.value[key]);
      }
    });

    // Add file if selected
    if (this.selectedFile) {
      formData.append('attachment', this.selectedFile, this.selectedFile.name);
    }

    // TODO: Replace with actual API call
    console.log('Ticket submitted with data:', this.ticketForm.value);
    console.log('Attachment:', this.selectedFile);

    // Example API call (uncomment when backend is ready):
    // this.ticketService.createTicket(formData).subscribe({
    //     next: (response) => {
    //         console.log('Ticket created successfully', response);
    //         this.resetForm();
    //     },
    //     error: (error) => {
    //         console.error('Error creating ticket', error);
    //     }
    // });

    alert('Ticket created successfully! (Check console for data)');
    this.resetForm();
  }

  resetForm(): void {
    this.ticketForm.reset({ userId: 101 });
    this.submitted = false;
    this.clearFile();
  }
}
