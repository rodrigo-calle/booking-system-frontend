import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'booking-system-frontend';
  
  sessionActive = false;

  constructor(private router: Router) {
    this.validateSession();
  }
  ngOnInit(): void {
    //this.validateSession();
  }

  validateSession(){
    var token = sessionStorage.getItem('token');
    if (token !== null)
      this.sessionActive = true;
    else 
      this.sessionActive = false;
  }

  logout() {
    this.sessionActive = false;
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
