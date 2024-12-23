import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/MainComponets/home/home.component';
import { NotFoundComponent } from './Components/Errors/not-found/not-found.component';
import { MoviesComponent } from './Components/MoviesComponents/movies/movies.component';
import { TvShowsComponent } from './Components/TVShowsComponents/tv-shows/tv-shows.component';
import { PeopleComponent } from './Components/MainComponets/people/people.component';
import { DiscussionComponent } from './Components/Community/discussion/discussion.component';
import { LeaderboardComponent } from './Components/Community/leaderboard/leaderboard.component';
import { SupportComponent } from './Components/AboutAndSupport/support/support.component';
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
import { TermsOfUseComponent } from './Components/Legal/terms-of-use/terms-of-use.component';
import { APITermsOfUseComponent } from './Components/Legal/apiterms-of-use/apiterms-of-use.component';
import { PrivacyPolicyComponent } from './Components/Legal/privacy-policy/privacy-policy.component';
import { DMCAPolicyComponent } from './Components/Legal/dmcapolicy/dmcapolicy.component';
import { GuidelinesComponent } from './Components/Community/guidelines/guidelines.component';
import { ContributionComponent } from './Components/Community/contribution/contribution.component';
import { AboutComponent } from './Components/AboutAndSupport/about/about.component';
import { ContactComponent } from './Components/AboutAndSupport/contact/contact.component';
import { SystemStatusComponent } from './Components/MainComponets/system-status/system-status.component';
import { APIComponent } from './Components/MainComponets/api/api.component';

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
  {path:"TermsOfUse",component:TermsOfUseComponent},
  {path:"APITermsOfUSE",component:APITermsOfUseComponent},
  {path:"PrivacyPolicy",component:PrivacyPolicyComponent},
  {path:"DMCAPolicy",component:DMCAPolicyComponent},
  {path:"Guidelines",component:GuidelinesComponent},
  {path:"Contribution",component:ContributionComponent},
  {path:"AboutUs",component:AboutComponent},
  {path:"ContactUs",component:ContactComponent},
  {path:"SystemStatus",component:SystemStatusComponent},
  {path:"API",component:APIComponent},
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
