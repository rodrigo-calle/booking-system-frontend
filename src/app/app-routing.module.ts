import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReservaComponent } from "./pages/reserva/reserva.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { ListadohabitacionesComponent } from "./pages/listadohabitaciones/listadohabitaciones.component";

import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { HomeComponent } from "./pages/home/home.component";
import { AttractionsComponent } from "./pages/attractions/attractions.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { PackagesComponent } from "./pages/packages/packages.component";

const routes:Routes = [
    {path:'register',component:RegisterComponent},
    {path:'reserva',component:ReservaComponent},
    {path:'about-us',component: AboutUsComponent },
    { path: '', component: HomeComponent },
    { path: 'attractions', component: AttractionsComponent },
    { path: 'login', component:LoginComponent},
    { path: 'listadohabitaciones', component:ListadohabitacionesComponent},
    { path: 'contactus', component: ContactComponent },
    { path: 'package-list', component: PackagesComponent},
    { path: 'reserva/:idpaquete', component: ReservaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
console.log(AppRoutingModule);
