import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import claim from 'src/assets/claim.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_LOGIN: string = "https://localhost:44309/api/user/login";


  constructor(private http: HttpClient) { }

  loginmock() {
    return claim;
  }

  login2(request: any) {
    return this.http.post(this.URL_LOGIN, request);
  }
  
  login(request: any) {
    return new Promise<any>((resolve, reject) => {
      this.http.post(this.URL_LOGIN, request).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error.error);
        }
      );
    });
  }
}
