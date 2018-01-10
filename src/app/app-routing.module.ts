import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ServiceComponent } from './service/service.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'main',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'complaint',
    component: ComplaintComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'story',
    component: StoryComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}