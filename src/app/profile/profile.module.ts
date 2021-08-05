import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';
import { MyTweetsComponent } from './components/my-tweets/my-tweets.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { TrendListComponent } from './components/trend-list/trend-list.component';
import { RecommendedPeopleComponent } from './components/recommended-people/recommended-people.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    UserOverviewComponent,
    MyTweetsComponent,
    TweetListComponent,
    ActionButtonsComponent,
    TrendListComponent,
    RecommendedPeopleComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
