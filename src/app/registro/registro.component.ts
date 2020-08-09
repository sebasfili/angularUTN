import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  hide: boolean = true;
  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      rePassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    })
  }
  submit() {
    if (this.registerForm.valid) {
      this.submitted = true;
    }
    else {
      this.submitted = false;
    }
  }


}
