import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AttractionsComponent } from "./pages/attractions/attractions.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'attractions', component: AttractionsComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
console.log(AppRoutingModule);
