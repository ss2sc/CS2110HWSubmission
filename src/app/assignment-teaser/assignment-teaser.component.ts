import { Component, OnInit, Input } from '@angular/core';
import { GlobalsService } from '../common/services/globals.service'

@Component({
  selector: 'assignment-teaser',
  templateUrl: './assignment-teaser.component.html',
  styleUrls: ['./assignment-teaser.component.scss']
})
export class AssignmentTeaserComponent implements OnInit {

  @Input()
  title : string;
  @Input()
  description : string;
  @Input()
  grade : string;

  constructor(private globals: GlobalsService) { }

  ngOnInit() {
  }

}
