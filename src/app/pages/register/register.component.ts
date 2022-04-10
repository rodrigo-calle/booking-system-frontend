import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  registerForm = this.fb.group({
    email: ['',Validators.required,Validators.email],
    contrasena: ['',Validators.required],
    nombres: ['',Validators.required],
    apellidos: ['',Validators.required],
    dni: ['',Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern("^[0-9]*$"),],
    datospersonales: ['',Validators.requiredTrue],
  })

  ngOnInit(): void {
  }

}
