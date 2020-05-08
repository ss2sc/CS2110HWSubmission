import { Injectable } from '@angular/core';
import DummyData from '../../../assets/dummydata.json'

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  // TODO: Replacement for cookie/session, replace on backend implementation
  user: any;
  constructor() { }

  // Use this for now to grab assignment, but will be replaced for database implementation
  getAssignment(id: number) {
    let courses = DummyData.courses;
    for(var i = 0; i < courses.length; i++) {
      for(var j = 0; j < courses[i].assignments.length; j++) {
        if(courses[i].assignments[j].assignmentID == id) {
          return courses[i].assignments[j];
        }
      }
    }
    return null;
  }
}
