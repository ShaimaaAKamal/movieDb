import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/MainComponets/home/home.component';
import { NotFoundComponent } from './Components/Errors/not-found/not-found.component';
import { MoviesComponent } from './Components/MoviesComponents/movies/movies.component';
import { TvShowsComponent } from './Components/TVShowsComponents/tv-shows/tv-shows.component';
import { PeopleComponent } from './Components/MainComponets/people/people.component';
import { DiscussionComponent } from './Components/MainComponets/discussion/discussion.component';
import { LeaderboardComponent } from './Components/MainComponets/leaderboard/leaderboard.component';
import { SupportComponent } from './Components/MainComponets/support/support.component';
import { NotificationsComponent } from './Components/MainComponets/notifications/notifications.component';
import { AddNewMovieComponent } from './Components/MoviesComponents/add-new-movie/add-new-movie.component';
import { AddNewTVShowComponent } from './Components/TVShowsComponents/add-new-tvshow/add-new-tvshow.component';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { AccountComponent } from './Components/User/account/account.component';
import { UserDiscussionsComponent } from './Components/User/user-discussions/user-discussions.component';
import { UserListsComponent } from './Components/User/user-lists/user-lists.component';
import { UserRatingsComponent } from './Components/User/user-ratings/user-ratings.component';
import { UserWatchlistComponent } from './Components/User/user-watchlist/user-watchlist.component';
import { EditProfileComponent } from './Components/User/edit-profile/edit-profile.component';
import { SettingsComponent } from './Components/User/settings/settings.component';
import { LoginComponent } from './Components/Credientials/login/login.component';
import { RegisterComponent } from './Components/Credientials/register/register.component';

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
  {path:"Profile" , component:ProfileComponent},
   {path:"Login",component:LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:":userName",component:AccountComponent,children:[
    {path:"Discussions",component:UserDiscussionsComponent},
    {path:"Lists",component:UserListsComponent},
    {path:"Ratings",component:UserRatingsComponent},
    {path:"Watchlist",component:UserWatchlistComponent},
    {path:"EditProfile",component:EditProfileComponent},
    {path:"Settings",component:SettingsComponent},]},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
