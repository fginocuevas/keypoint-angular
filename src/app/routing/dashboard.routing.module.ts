import { MyProfileComponent } from './../components/my-profile/my-profile.component';
import { ExploreComponent } from './../components/explore/explore.component';
import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { HomePageComponent } from './../components/home-page/home-page.component';
import { LoginComponent } from './../components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SkillsCatalogComponent } from '../components/skills-catalog/skills-catalog.component';

const DASHBOARD_ROUTES: Routes = [
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      {path: "", component: HomePageComponent},
      {path: "home", component: HomePageComponent},
      {path: "skills-catalog", component: SkillsCatalogComponent, pathMatch:"full"},
      {path: "skills-catalog/:skill", component: SkillsCatalogComponent},
      {path: "explore", component: ExploreComponent},
      {path: "my-profile", component: MyProfileComponent},
    ]
  }
  
]

@NgModule({
  imports: [
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})

export class DashboardRoutingModule { }
