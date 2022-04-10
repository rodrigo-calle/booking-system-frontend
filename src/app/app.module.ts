import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
>>>>>>> d161bd33b628e00d3e7ffea88f46957af31e149f

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ReservaComponent 
=======
    RegisterComponent,
    HomeComponent,
>>>>>>> d161bd33b628e00d3e7ffea88f46957af31e149f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    BrowserAnimationsModule,
=======
    ReactiveFormsModule
>>>>>>> d161bd33b628e00d3e7ffea88f46957af31e149f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
