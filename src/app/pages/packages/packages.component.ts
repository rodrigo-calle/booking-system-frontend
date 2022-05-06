import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { PaquetesService } from 'src/app/services/paquetes.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  paquetes : any = []
  apartments : any = []

  constructor(
    private readonly ps: PaquetesService,
    private readonly as: HabitacionesService,
    private ar: ActivatedRoute
  ) { }

  __obtener_paquetes() {
    const token  = sessionStorage.getItem('token');
    const header = { Authorization: 'Bearer ' + token };

    //this.ps.__be_listar_paquetes(header)  TODO
    this.ps.__be_listar_paquetesNT().subscribe((rest: any) => {
      this.paquetes = rest.data;
      console.log(this.paquetes);
    })    
  }

  ngOnInit(): void {
    this.__obtener_paquetes();
  }

}
