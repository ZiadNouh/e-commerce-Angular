import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  gameForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.gameForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators],
    });
  }

  formError: string = '';
  handleRegisterSubmit(registerForm: NgForm) {
    console.log(registerForm.form.controls);
  }
}
