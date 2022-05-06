import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;

  constructor( 
    private fb:FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { } 

  loginForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    contrasena: ['',Validators.required]
  });


 async __onSubmit() {
    if (this.loginForm.valid){
      this.isLoading = true;
      console.log(this.loginForm.value);
      var request = {
        user: 'aaa',
        password: 'asdasd'
      }
      var response = await this.loginService.login(request);
      if (response.isSuccess) {
        this.isLoading = false;
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('id', response.data.idusuario);
        this.router.navigate(['/']);
      } else {
        this.isLoading = false;
        alert("Credenciales Incorrectas");
      }
    }else{
      alert("Formulario no valido")
    }
  }

  ngOnInit(): void {
  }
}
