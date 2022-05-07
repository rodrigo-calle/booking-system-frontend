import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-listadohabitaciones',
  templateUrl: './listadohabitaciones.component.html',
  styleUrls: ['./listadohabitaciones.component.css']
})
export class ListadohabitacionesComponent implements OnInit {
  habitaciones : any = []
  constructor(
    private readonly hs: HabitacionesService,
    private ar: ActivatedRoute
  ) { }
  __obtener_habitaciones(){
    this.hs._getHabitaciones().subscribe((rest: any) => {
      this.habitaciones = rest.data;
    })
  }
  ngOnInit(): void {
    this.ar.params.subscribe(() => {
      this.__obtener_habitaciones()
    })
  }

}
