import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) { 
    
  }

  contactusForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    mensaje: ['', Validators.required]
  })

  _onSubmit(){
    if(this.contactusForm.valid){

    }else{
      alert("Complete los datos");
    }
  }

  ngOnInit(): void {
  }

}
