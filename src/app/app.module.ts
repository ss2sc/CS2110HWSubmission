import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import '../polyfills';

import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {DemoMaterialModule} from './material-module';

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
import { ModifyAssignmentComponent } from './modify-assignment/modify-assignment.component';
import { AddInstructorsComponent } from './add-instructors/add-instructors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';
import { GradeSubmissionComponent } from './grade-submission/grade-submission.component'
import { AceEditorModule } from 'ng2-ace-editor';

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
    ModifyAssignmentComponent,
    AddInstructorsComponent,
    SubmitAssignmentComponent,
    GradeSubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    MatNativeDateModule,
    DemoMaterialModule,
    AceEditorModule,
  ],
  providers: [GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
