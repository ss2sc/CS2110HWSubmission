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

  constructor(private globals: GlobalsService) { }

  ngOnInit() {
  }

}
