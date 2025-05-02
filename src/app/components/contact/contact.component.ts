import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;
  isSubmitSuccess = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  onSubmit(): void {
    this.isSubmitted = true;
    
    if (this.contactForm.valid) {
      console.log('Form data:', this.contactForm.value);
      this.isSubmitSuccess = true;
      this.contactForm.reset();
      this.isSubmitted = false;
      
      setTimeout(() => {
        this.isSubmitSuccess = false;
      }, 5000);
    }
  }
}