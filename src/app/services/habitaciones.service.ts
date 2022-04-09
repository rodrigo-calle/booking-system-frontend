import { Injectable } from '@angular/core';
import habitaciones from 'src/assets/json/habitaciones.json';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  constructor() { }

  _getHabitaciones() {
    return habitaciones.data;
  }

}
