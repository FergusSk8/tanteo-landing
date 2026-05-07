import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent {
  #fb = inject(FormBuilder);

  contactForm = this.#fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      // Logic for sending the form (API call) would go here
      this.contactForm.reset();
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && control.touched);
  }
}
