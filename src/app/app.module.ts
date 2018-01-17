import { RoutingModule } from './routing/routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SkillsCatalogComponent } from './components/skills-catalog/skills-catalog.component';
import { ExploreComponent } from './components/explore/explore.component';
import { SearchSkillsComponent } from './components/home-page/search-skills/search-skills.component';
import { CatalogComponent } from './components/skills-catalog/catalog/catalog.component';
import { SkillService } from './services/skill/skill.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    MyProfileComponent,
    DashboardComponent,
    NavbarComponent,
    SkillsCatalogComponent,
    ExploreComponent,
    SearchSkillsComponent,
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
