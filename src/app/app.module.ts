import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { HomeComponent } from './Components/MainComponets/home/home.component';
import { MoviesComponent } from './Components/MainComponets/movies/movies.component';
import { TvShowsComponent } from './Components/MainComponets/tv-shows/tv-shows.component';
import { PeopleComponent } from './Components/MainComponets/people/people.component';
import { LoginComponent } from './Components/Credientials/login/login.component';
import { RegisterComponent } from './Components/Credientials/register/register.component';
import { NotFoundComponent } from './Components/Errors/not-found/not-found.component';
import { CreateTVshowOrMovieComponent } from './Components/shared/navbar/create-tvshow-or-movie/create-tvshow-or-movie.component';
import { CreateLoginOrRehisterComponerntComponent } from './Components/shared/navbar/create-login-or-rehister-componernt/create-login-or-rehister-componernt.component';
import { LoggedUserNavbarSectionComponent } from './Components/shared/navbar/logged-user-navbar-section/logged-user-navbar-section.component';
import { DiscussionComponent } from './Components/MainComponets/discussion/discussion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    PeopleComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    CreateTVshowOrMovieComponent,
    CreateLoginOrRehisterComponerntComponent,
    LoggedUserNavbarSectionComponent,
    DiscussionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
