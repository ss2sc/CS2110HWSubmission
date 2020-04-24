import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { ModifyAssignmentComponent } from './modify-assignment/modify-assignment.component';
import { AddInstructorsComponent } from './add-instructors/add-instructors.component';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'instructors', component: AddInstructorsComponent},
  {path: 'createAssignment', component: CreateAssignmentComponent},
  {path: 'modifyAssignment/:id', component: ModifyAssignmentComponent},
  {path: 'submitAssignment/:id', component: SubmitAssignmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
