import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; 
import { ReservaComponent } from "./pages/reserva/reserva.component";
import { RegisterComponent } from "./pages/register/register.component";
import { HomeComponent } from "./pages/home/home.component";

const routes:Routes = [
    {path:'register',component:RegisterComponent},
    {path:'reserva',component:ReservaComponent},
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
console.log(AppRoutingModule);
