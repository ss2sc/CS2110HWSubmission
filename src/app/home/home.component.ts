import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../common/services/globals.service';
import DummyData from '../../assets/dummydata.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = DummyData.users[this.globals.user].firstName + DummyData.users[this.globals.user].lastName
  classes: any[] = DummyData.classes;

  constructor(private globals: GlobalsService) { }

  ngOnInit() {
  }

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
}
