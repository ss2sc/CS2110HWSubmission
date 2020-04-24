import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import DummyInstructors from '../../assets/dummyInstructors.json';

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

  numRows: number = 1;
  addInstructorTable;

  instructorData;
  displayedColumns: string[] = ['name', 'computingId', 'gradingHours', 'role'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

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
    this.addInstructorTable = document.getElementById("AddInstructorTable");
    this.instructorData.sort = this.sort;

    this.instructorData.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.computingId.toLowerCase().includes(filter);
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.instructorData.filter = filterValue.trim().toLowerCase();
  }

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

    this.addInstructorTable.appendChild(newRow);
  }

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