import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(        
    private readonly http: HttpClient
  ) { }

  _be_insert(data: any) {
    return this.http.post<any>('https://localhost:44309/api/user/insert', data);
  }

}
