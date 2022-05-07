import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  habitaciones : any = []

  constructor(
    private readonly hs: HabitacionesService,
    private ar: ActivatedRoute
  ) { }

  __obtener_habitaciones(){
    this.hs._getHabitaciones().subscribe((rest: any) => {
      console.log(rest.data)
      for (let index = 1; index < rest?.data.length; index++) {
        if (index < 5) {
          this.habitaciones.push(rest.data[index])
        }

      }
      // this.habitaciones = rest.data;

    })
  }


  ngOnInit(): void {
    this.ar.params.subscribe(() => {
      this.__obtener_habitaciones()
    })
  }

}
