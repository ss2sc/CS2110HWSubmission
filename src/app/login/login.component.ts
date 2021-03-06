/**
 * TODO: This was used as a dummy login page for the three different experiences
 * Will need to be replaced for a backend implementation (Using own login or, 
 * at the time of this writing, UVa's Shibboleth implementation)
 */

import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../common/services/globals.service';
import DummyData from '../../assets/dummydata.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private globals: GlobalsService) { }

  ngOnInit() {
  }

  login(user: number) {
    this.globals.user = DummyData.users[user];
  }
}
