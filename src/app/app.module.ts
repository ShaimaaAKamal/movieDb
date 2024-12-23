import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { HomeComponent } from './Components/MainComponets/home/home.component';
import { MoviesComponent } from './Components/MoviesComponents/movies/movies.component';
import { TvShowsComponent } from './Components/TVShowsComponents/tv-shows/tv-shows.component';
import { PeopleComponent } from './Components/MainComponets/people/people.component';
import { LoginComponent } from './Components/Credientials/login/login.component';
import { RegisterComponent } from './Components/Credientials/register/register.component';
import { NotFoundComponent } from './Components/Errors/not-found/not-found.component';
import { CreateTVshowOrMovieComponent } from './Components/shared/navbar/create-tvshow-or-movie/create-tvshow-or-movie.component';
import { CreateLoginOrRehisterComponerntComponent } from './Components/shared/navbar/create-login-or-rehister-componernt/create-login-or-rehister-componernt.component';
import { LoggedUserNavbarSectionComponent } from './Components/shared/navbar/logged-user-navbar-section/logged-user-navbar-section.component';
import { DiscussionComponent } from './Components/Community/discussion/discussion.component';
import { LeaderboardComponent } from './Components/Community/leaderboard/leaderboard.component';
import { SupportComponent } from './Components/AboutAndSupport/support/support.component';
import { NotificationsComponent } from './Components/MainComponets/notifications/notifications.component';
import { AddNewMovieComponent } from './Components/MoviesComponents/add-new-movie/add-new-movie.component';
import { AddNewTVShowComponent } from './Components/TVShowsComponents/add-new-tvshow/add-new-tvshow.component';
import { NavbarUserComponent } from './Components/shared/navbar/logged-user-navbar-section/navbar-user/navbar-user.component';
import { NavbarNotificationComponent } from './Components/shared/navbar/logged-user-navbar-section/navbar-notification/navbar-notification.component';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { UserRatingsComponent } from './Components/User/user-ratings/user-ratings.component';
import { UserWatchlistComponent } from './Components/User/user-watchlist/user-watchlist.component';
import { UserListsComponent } from './Components/User/user-lists/user-lists.component';
import { UserDiscussionsComponent } from './Components/User/user-discussions/user-discussions.component';
import { EditProfileComponent } from './Components/User/edit-profile/edit-profile.component';
import { SettingsComponent } from './Components/User/settings/settings.component';
import { AccountComponent } from './Components/User/account/account.component';
import { LanguagePrefrenceComponent } from './Components/shared/navbar/language-prefrence/language-prefrence.component';
import { FloatingIconsOnSmallScreensComponent } from './Components/shared/navbar/floating-icons-on-small-screens/floating-icons-on-small-screens.component';
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
import { ResetPasswordComponent } from './Components/Credientials/reset-password/reset-password.component';
import { SendVerificationMailComponent } from './Components/Credientials/send-verification-mail/send-verification-mail.component';

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
    LeaderboardComponent,
    SupportComponent,
    NotificationsComponent,
    AddNewMovieComponent,
    AddNewTVShowComponent,
    NavbarUserComponent,
    NavbarNotificationComponent,
    ProfileComponent,
    UserRatingsComponent,
    UserWatchlistComponent,
    UserListsComponent,
    UserDiscussionsComponent,
    EditProfileComponent,
    SettingsComponent,
    AccountComponent,
    LanguagePrefrenceComponent,
    FloatingIconsOnSmallScreensComponent,
    TermsOfUseComponent,
    APITermsOfUseComponent,
    PrivacyPolicyComponent,
    DMCAPolicyComponent,
    GuidelinesComponent,
    ContributionComponent,
    AboutComponent,
    ContactComponent,
    SystemStatusComponent,
    APIComponent,
    ResetPasswordComponent,
    SendVerificationMailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
