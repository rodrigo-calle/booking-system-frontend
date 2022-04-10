import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AttractionsComponent } from "./pages/attractions/attractions.component";
import { HomeComponent } from "./pages/home/home.component";
import { ReservaComponent } from "./pages/reserva/reserva.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { ListadohabitacionesComponent } from "./pages/listadohabitaciones/listadohabitaciones.component";


const routes:Routes = [
    {path:'register',component:RegisterComponent},
    {path:'reserva',component:ReservaComponent},
    { path: '', component: HomeComponent },
    { path: 'attractions', component: AttractionsComponent },
    { path: 'login', component:LoginComponent},
    { path: 'listadohabitaciones', component:ListadohabitacionesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
console.log(AppRoutingModule);
