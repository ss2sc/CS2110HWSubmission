import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../common/services/globals.service';
import DummyData from '../../assets/dummydata.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // TODO: Load in from backend or session, this is part of the cookie/session replacement.
  name: string = this.globals.user.firstName + this.globals.user.lastName;

  // TODO: Load in courses from backend
  courses: any[] = DummyData.courses;

  constructor(private globals: GlobalsService) { }

  ngOnInit() {
  }

  // Grabs assignments that are done (edit for past late due date as well)
  pastAssignments(assignments: any[]) {
    var a = [];
    var now = new Date();
    for(var i = 0; i < assignments.length; i++) {
      var due = new Date(assignments[i].dueDate);
      if(now > due) {
        a.push(assignments[i]);
      }
    }
    return a;
  }

  // Grabs assignments that are due soon but not yet done.
  currentAssignments(assignments: any[]) {
    var a = [];
    var now = new Date();
    for(var i = 0; i < assignments.length; i++) {
      var due = new Date(assignments[i].dueDate);
      if(now <= due) {
        a.push(assignments[i]);
      }
    }
    return a;
  }

  // TODO: Add overdue assignments function
}
