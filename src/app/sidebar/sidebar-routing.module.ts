import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home-content',
    component: HomeContentComponent,
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarRoutingModule {}
