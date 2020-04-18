import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalsService } from './common/services/globals.service';
import { AssignmentTeaserComponent } from './assignment-teaser/assignment-teaser.component';
import { CourseTeaserComponent } from './course-teaser/course-teaser.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { ModifyAssignmentComponent } from './modify-assignment/modify-assignment.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ToolbarComponent,
    FooterComponent,
    AssignmentTeaserComponent,
    CourseTeaserComponent,
    CreateAssignmentComponent,
    ModifyAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
