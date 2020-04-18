import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateAssignmentComponent implements OnInit {

  rubricDiv;
  numRubric = 1;

  penaltyDiv;
  numPenalties = 1;

  constructor() { }

  ngOnInit() {
    this.rubricDiv = document.getElementById("CreateAssign-rubric");
    this.penaltyDiv = document.getElementById("CreateAssign-penalty");
  }

  addRubric() {
    this.numRubric ++;

    var newGroup = document.createElement("div");
    newGroup.className = "CreateAssign-pointGroup";

    var newPointLabel = this.makeNewLabel("rubricPoints" + this.numRubric, "Points");
    var newPointInput = this.makeNewInput("number", "form-control CreateAssign-pointInput", "rubricPoints" + this.numRubric);
    var newDescLabel = this.makeNewLabel("description" + this.numRubric, "Description");
    var newDescInput = this.makeNewInput("text", "form-control CreateAssign-input", "description" + this.numRubric);

    newGroup.appendChild(newPointLabel);
    newGroup.appendChild(newPointInput);
    newGroup.appendChild(newDescLabel);
    newGroup.appendChild(newDescInput);

    this.rubricDiv.appendChild(newGroup);
  }

  addPenalty() {
    this.numPenalties ++;

    var newGroup = document.createElement("div");
    newGroup.className = "CreateAssign-pointGroup";

    var newPointLabel = this.makeNewLabel("latePoints" + this.numPenalties, "Points");
    var newPointInput = this.makeNewInput("number", "form-control CreateAssign-pointInput", "latePoints" + this.numPenalties);
    var newDescLabel = this.makeNewLabel("time" + this.numPenalties, "Time");
    var newDescInput = this.makeNewInput("text", "form-control CreateAssign-input", "time" + this.numPenalties);

    newGroup.appendChild(newPointLabel);
    newGroup.appendChild(newPointInput);
    newGroup.appendChild(newDescLabel);
    newGroup.appendChild(newDescInput);

    this.penaltyDiv.appendChild(newGroup);
  }

  makeNewLabel(forText, text) {
    var newLabel = document.createElement("label");
    newLabel.htmlFor = forText;
    newLabel.innerHTML = text;

    return newLabel;
  }

  makeNewInput(inputMode, classes, id) {
    var newInput = document.createElement("input");
    newInput.inputMode = inputMode;
    newInput.className = classes;
    newInput.id = id;

    return newInput;
  }

}
