import { Component, OnInit } from '@angular/core';
import AssignmentData from '../../assets/dummyAssignment.json'

@Component({
  selector: 'app-modify-assignment',
  templateUrl: './modify-assignment.component.html',
  styleUrls: ['./modify-assignment.component.scss']
})
export class ModifyAssignmentComponent implements OnInit {

  title: string = AssignmentData.title;
  description: string = AssignmentData.description;
  dueDate: string = AssignmentData["due-date"];
  maxSubmissions: number = AssignmentData["max-submissions"];
  rubric: Object = AssignmentData["rubric"];
  penalties: Object = AssignmentData["late-policy"];
  hasTests: boolean = AssignmentData["expecting-tests"];


  constructor() { }

  ngOnInit() {
  }

}
