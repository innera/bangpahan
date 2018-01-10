import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ServiceComponent } from './service/service.component';
import { StoryComponent } from './story/story.component';
import { VisionComponent } from './story/vision/vision.component';
import { StructureComponent } from './structure/structure.component';
import { IndepComponent } from './indep/indep.component';


@NgModule({
   declarations: [    
    FooterComponent,
    AppComponent,
    TestComponent,
    HomeComponent,
    ContactComponent,
    ComplaintComponent,
    ServiceComponent,
    StoryComponent,
    VisionComponent,
    StructureComponent,
    IndepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAs1aXKPkbboFvuc4cILd337tsK-czn7JA'
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
