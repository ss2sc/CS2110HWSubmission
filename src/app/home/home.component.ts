import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../common/services/globals.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private globals: GlobalsService) { }

  ngOnInit() {
    console.log(this.globals.isInstructor);
  }

}
