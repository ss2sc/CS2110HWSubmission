import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { ModifyAssignmentComponent } from './modify-assignment/modify-assignment.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'createAssignment', component: CreateAssignmentComponent},
  {path: 'modifyAssignment', component: ModifyAssignmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
