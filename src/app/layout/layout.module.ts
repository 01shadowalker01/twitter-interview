import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';

import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainContainerComponent } from "./components/main-container/main-container.component";
import { ProfileModule } from "../profile/profile.module";

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, MainContainerComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,

    ProfileModule
  ],
  exports: [MainContainerComponent],
})
export class LayoutModule {}
