import { HomePageComponent } from './../components/home-page/home-page.component';
import { LoginComponent } from './../components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardRoutingModule } from './dashboard.routing.module';

const APP_ROUTES: Routes = [
  {path: "login", component: LoginComponent},
  {path: "", redirectTo:"/login", pathMatch: "full"},
  //{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    DashboardRoutingModule
  ],
  exports: [RouterModule],
  declarations: []
})

export class RoutingModule { }
