import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-assignment',
  templateUrl: './submit-assignment.component.html',
  styleUrls: ['./submit-assignment.component.scss']
})
export class SubmitAssignmentComponent implements OnInit {

  assignment: any;

  constructor() { }

  ngOnInit() {
  }

}
