import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private rs: RegisterService,
    private router: Router
  ) { }

  registerForm = this.fb.group({
    loginusuario: ['', [Validators.required, Validators.email]],
    passwordusuario: ['', Validators.required],
    nombres: ['', Validators.required], 
    apellidopaterno: ['', Validators.required],
    apellidomaterno: ['', Validators.required],
    documentoidentidad: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    datospersonales: ['', Validators.requiredTrue],
  });

  _insert(data: any) {
    this.rs._be_insert(data).subscribe((rest: any) => {
      if (rest.isSuccess) {
        alert("Usuario creado con Id: " + rest.data.id);
        this.router.navigate(['login']);
      } else {
        alert("Error al registrar usuario");
      }
    })
  }

  _onSubmit() {
    if (this.registerForm.valid) {
      this._insert(this.registerForm.value);
    } else {
      console.log(this.registerForm);
      alert("Ingrese datos validos");
    }
  }

  ngOnInit(): void {
  }

}
