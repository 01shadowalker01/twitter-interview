import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainContainerComponent } from "./components/main-container/main-container.component";

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, MainContainerComponent],
  imports: [CommonModule],
  exports: [MainContainerComponent],
})
export class LayoutModule {}
