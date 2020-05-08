import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import DummyInstructors from '../../assets/dummyInstructors.json';

/**
 * Defines the data important for each instructor
 * Name: the first and last name
 * Computing Id: the UVA computing Id (should be unique)
 * Grading Hours: the number of hours the instructor has signed up to grade for
 * Role: whether the instructor is a teaching assistant (TA) or professor
 */
export interface Instructor {
  name: string;
  computingId: string;
  gradingHours: number;
  role: string;
}

@Component({
  selector: 'app-add-instructors',
  templateUrl: './add-instructors.component.html',
  styleUrls: ['./add-instructors.component.scss']
})

export class AddInstructorsComponent implements OnInit {

  //the current number of rows in the new instructors table
  //used to assign a unique id to each row
  numRows: number = 1;

  //the table of new instructors to be added
  addInstructorTable;

  //the data for the current instructors
  instructorData;

  //the columns to display in the current-instructors table
  displayedColumns: string[] = ['name', 'computingId', 'gradingHours', 'role', 'actions'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  /**
   * Reads the instructor data and puts them into an array
   * Converts the array into a table that can be searched and sorted
   */
  constructor() {
    var data = new Array();
    for(let instructor of DummyInstructors.instructors) {
      data.push({
        name: instructor.Name,
        computingId: instructor["Computing ID"],
        gradingHours: instructor["Grading Hours"],
        role: instructor.Role,
      })
    }

    this.instructorData = new MatTableDataSource(data);
  }

  ngOnInit() {
    //gets the div element of the area to insert instructors manually
    this.addInstructorTable = document.getElementById("AddInstructorTable");

    this.instructorData.sort = this.sort;

    //defines filter function for the table
    //only allows table to filter from name and computing id
    this.instructorData.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.computingId.toLowerCase().includes(filter);
    };
  }

  /**
   * Function that executes whenever something is typed into the search bar
   * Defines the filter string and searches the table for values that contain the string
   * @param event event that is triggered
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.instructorData.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Creates a new row to insert an instructor manually
   */
  addInstructor() {
    this.numRows++;

    var newRow = document.createElement("tr");

    var newNameInput = this.addInstructorInput("name");
    var newCompIdInput = this.addInstructorInput("computingId");
    var newGradeHourInput = this.addInstructorInput("hours");
    var newRoleInput = this.addInstructorInput("role");

    newRow.appendChild(newNameInput);
    newRow.appendChild(newCompIdInput);
    newRow.appendChild(newGradeHourInput);
    newRow.appendChild(newRoleInput);

    //Adds the row to the instructor table
    this.addInstructorTable.appendChild(newRow);
  }

  /**
   * Creates a new input based on the name of the field it's associated with
   * Only works with name == "name", "computingId", "hours", and "role"
   * 
   * @param name the name of the input field
   * @return the new input field that was created or null if name isn't one of the above values
   */
  addInstructorInput(name) {
    var newCell = document.createElement("th");

    if (name == "name" || name == "computingId" || name == "hours") {
      var newInput = document.createElement("input");
      newInput.id = name + this.numRows;

      if (name == "name" || name == "computingId") {
        newInput.type = "text";

        if (name == "name") {
          newInput.placeholder = "Name";
        } else {
          newInput.placeholder = "Computing Id";
        }
      } else {
        newInput.type = "number"
        newInput.value = "0";
      }

      newCell.appendChild(newInput);
      return newCell;
    } else if (name == "role") {
      var newSelect = this.addInstructorSelect();
      newCell.appendChild(newSelect);
      return newCell;
    } else {
      return null;
    }
  }

  /**
   * Creates a drop-down menu for the role of the new instructor
   * 
   * @return the new dropdown menu
   */
  addInstructorSelect() {
    var newSelect = document.createElement("select");
    newSelect.id = "role" + this.numRows;

    var newProfOption = document.createElement("option");
    newProfOption.value = "Professor";
    newProfOption.innerHTML = "Professor";

    var newTAOption = document.createElement("option");
    newTAOption.value = "Teaching Assistant";
    newTAOption.innerHTML = "TA";

    newSelect.appendChild(newProfOption);
    newSelect.appendChild(newTAOption);

    return newSelect;
  }

}