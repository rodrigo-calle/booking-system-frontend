import { Component, OnInit, Optional } from '@angular/core';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { Habitacion } from 'src/classes/Habitacion';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})

export class ReservaComponent implements OnInit {

  declare require: any;

  habitacionesJson = <HabitacionJson[]>require('../../../assets/json/habitaciones.json');
  habitaciones: Array<Habitacion> = [];
  habitacionesReservadas: Array<HabitacionJson> = [];

  constructor(
    private readonly rs: HabitacionesService,
  ) { }

  _selectHabitacion(event: any, habitacionReservada: Habitacion): void {

    //traer la habitación si ya fué agregada
    const index = this.habitacionesReservadas.findIndex((object) => {
      return object.id === habitacionReservada.id;
    });

    if (index === -1) {//es un registro nuevo por tipo de habitacion
      habitacionReservada.disponibles = event.target.value;
      this.habitacionesReservadas.push(habitacionReservada);
    } else {
      if (event.target.value == 0) {
        this._deleteHabitacion(habitacionReservada);
      }
      else {
        this.habitacionesReservadas[index].disponibles = event.target.value;
      }
    }
  }

  _deleteHabitacion(habitacionEliminada: HabitacionJson, indiceObtenido?: number): void {

    var index = 0;

    if (indiceObtenido !== undefined) {
      index = indiceObtenido;
    }
    else {
      index = this.habitacionesReservadas.findIndex((object) => {
        return object.id === habitacionEliminada.id;
      });
    }
    this.habitacionesReservadas.splice(index, 1);
  }

  _obtenerHabitaciones() {
    this.habitacionesJson = this.rs._getHabitaciones();
  }

  _desglosar_Habitaciones() {
    if (this.habitacionesJson[0] != null) {
      this.habitacionesJson.forEach(item => {

        var habitacion = new Habitacion();
        habitacion.disponiblesArray = [];

        habitacion.id = item.id;
        habitacion.name = item.name;
        habitacion.personas = item.personas;
        habitacion.price = item.price;
        habitacion.image = item.image;

        for (let i = 0; i <= item.disponibles; i++) {
          habitacion.disponiblesArray.push(i);
        }

        this.habitaciones.push(habitacion);
      });
    }
  }

  ngOnInit(): void {
    this._obtenerHabitaciones();
    this._desglosar_Habitaciones();
  }
}

interface HabitacionJson {
  id: number,
  name: String,
  price: String,
  personas: number,
  disponibles: number,
  image: String,
}




