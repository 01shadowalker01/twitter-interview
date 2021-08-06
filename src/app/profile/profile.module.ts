import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserOverviewComponent } from "./components/user-overview/user-overview.component";
import { MyTweetsComponent } from "./components/my-tweets/my-tweets.component";
import { ActionButtonsComponent } from "./components/action-buttons/action-buttons.component";
import { TrendListComponent } from "./components/trend-list/trend-list.component";
import { RecommendedPeopleComponent } from "./components/recommended-people/recommended-people.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { TweetComponent } from "./components/tweet/tweet.component";

@NgModule({
  declarations: [
    UserOverviewComponent,
    MyTweetsComponent,
    TweetComponent,
    ActionButtonsComponent,
    TrendListComponent,
    RecommendedPeopleComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule,
  ],
  exports: [ProfileComponent],
})
export class ProfileModule {}
