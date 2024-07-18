import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeContentComponent } from './home-content/home-content.component';

@NgModule({
  declarations: [
    AboutComponent,
    ServicesComponent,
    ExperienceComponent,
    WorkComponent,
    BlogComponent,
    ContactComponent,
    HomeContentComponent
  ],
  imports: [CommonModule, SidebarRoutingModule],
})
export class SidebarModule {}
