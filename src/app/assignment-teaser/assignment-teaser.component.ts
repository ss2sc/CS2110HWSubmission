import { Component, OnInit, Input } from '@angular/core';
import { GlobalsService } from '../common/services/globals.service'

@Component({
  selector: 'assignment-teaser',
  templateUrl: './assignment-teaser.component.html',
  styleUrls: ['./assignment-teaser.component.scss']
})
export class AssignmentTeaserComponent implements OnInit {

  // Takes input from parent (home) in the form of [assignment]="assignment"
  @Input()
  assignment : any;

  constructor(private globals: GlobalsService) { }

  ngOnInit() {
  }

}
