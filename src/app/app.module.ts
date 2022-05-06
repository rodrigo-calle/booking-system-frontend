import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AttractionsComponent } from './pages/attractions/attractions.component';
import { LoginComponent } from './pages/login/login.component';
import { ListadohabitacionesComponent } from './pages/listadohabitaciones/listadohabitaciones.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent,
    HomeComponent,
    AttractionsComponent,
    LoginComponent,
    ListadohabitacionesComponent,

    RegisterComponent,
    AboutUsComponent,
    ContactComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
