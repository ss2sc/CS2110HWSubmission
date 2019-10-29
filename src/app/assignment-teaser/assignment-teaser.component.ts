import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../common/services/globals.service'

@Component({
  selector: 'assignment-teaser',
  templateUrl: './assignment-teaser.component.html',
  styleUrls: ['./assignment-teaser.component.scss']
})
export class AssignmentTeaserComponent implements OnInit {

  constructor(private globals: GlobalsService) { }

  ngOnInit() {
  }

}
