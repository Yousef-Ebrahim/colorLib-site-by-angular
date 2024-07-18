import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { StartComponent } from './sidebar/start/start.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, StartComponent],
  imports: [BrowserModule, AppRoutingModule, SidebarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
