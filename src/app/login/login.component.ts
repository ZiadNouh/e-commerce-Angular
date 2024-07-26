import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formError: string = '';

  handleLoginSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
    } else {
      const controls = loginForm.form.controls;

      Object.keys(controls).forEach((key) => {
        const control = controls[key];
        control.markAsTouched();
      });

      this.formError =
        'All fields must be completed correctly before submitting the form.';
      console.log('Form is invalid');
    }
  }
}
