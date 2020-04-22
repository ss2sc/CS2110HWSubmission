import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { ModifyAssignmentComponent } from './modify-assignment/modify-assignment.component';
import { AssignmentComponent } from './assignment/assignment.component';


const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'createAssignment', component: CreateAssignmentComponent, pathMatch: 'full'},
  {path: 'modifyAssignment/:id', component: ModifyAssignmentComponent},
  {path: 'assignment/:id', component: AssignmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
