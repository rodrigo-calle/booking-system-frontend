import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import habitaciones from 'src/assets/json/habitaciones.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  _getHabitaciones() {
    return this.http.get("https://localhost:44309/api/habitacion/listar");
  }

  _getHabitacionesAgrup() : Observable<any>{
    return this.http.get("https://localhost:44309/api/habitacion/listar_agrup");
  }

  _insertReserva(data :any){
    return this.http.post<any>("https://localhost:44309/api/reserva/insert", data);
  }

}
