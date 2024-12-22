import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/MainComponets/home/home.component';
import { NotFoundComponent } from './Components/Errors/not-found/not-found.component';
import { MoviesComponent } from './Components/MainComponets/movies/movies.component';
import { TvShowsComponent } from './Components/MainComponets/tv-shows/tv-shows.component';
import { PeopleComponent } from './Components/MainComponets/people/people.component';
import { DiscussionComponent } from './Components/MainComponets/discussion/discussion.component';
import { LeaderboardComponent } from './Components/MainComponets/leaderboard/leaderboard.component';
import { SupportComponent } from './Components/MainComponets/support/support.component';
import { NotificationsComponent } from './Components/MainComponets/notifications/notifications.component';
import { AddNewMovieComponent } from './Components/AddNewComponents/add-new-movie/add-new-movie.component';
import { AddNewTVShowComponent } from './Components/AddNewComponents/add-new-tvshow/add-new-tvshow.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:"Movies",component:MoviesComponent},
  {path:"TVShows",component:TvShowsComponent},
  {path:"People" ,component:PeopleComponent},
  {path:"Discussions" , component:DiscussionComponent},
  {path:"LeaderBoard" , component:LeaderboardComponent},
  {path:"Support",component:SupportComponent},
  {path:"Notification",component:NotificationsComponent},
  {path:"AddNewMovie",component:AddNewMovieComponent},
  {path:"AddNewShow" , component:AddNewTVShowComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
