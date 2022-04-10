import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { PackagesComponent } from "./pages/packages/packages.component";

const routes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'contact/form', component: ContactComponent },
    { path: 'packages/list', component: PackagesComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
console.log(AppRoutingModule);