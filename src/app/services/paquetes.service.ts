import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {
  constructor(
    private readonly http: HttpClient
  ) { }

  __be_listar_paquetes(headers : any) {
    return this.http.get('https://localhost:44309/api/paquete/listar', { headers });
  }

  __be_listar_paquetesNT() {
    return this.http.get('https://localhost:44309/api/paquete/listar');
  }

  __be_obtener_paquete(params: string) {
    return this.http.get('https://localhost:44309/api/paquete/obtener' + params);
  }

  __be_insertar(data: any, headers: any) {
    return this.http.post<any>('https://localhost:44309/api/project/insertar', data, { headers });
  }
}
