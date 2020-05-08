import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None //ensures styling is applied to programmatically applied components
})
export class CreateAssignmentComponent implements OnInit {

  //div for the rubric section of the page
  rubricDiv;

  //div for the penalties section of the page
  penaltyDiv;

  //the number of current rubric rows
  //Used to give unique ids to each rubric row
  numRubric = 1;

  //the number of current penalty rows
  //Used to give unique ids to each penalty row
  numPenalties = 1;

  constructor() { }

  ngOnInit() {
    //fetches the divs associated with the rubric and penalty sections
    //These are used later to add rows as the professors need.
    this.rubricDiv = document.getElementById("CreateAssign-rubric");
    this.penaltyDiv = document.getElementById("CreateAssign-penalty");
  }

  /**
   * Adds a new rubric row to the rubric div
   */
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

    //adds the newly created component to the rubric div
    this.rubricDiv.appendChild(newGroup);
  }

  /**
   * Adds a new penalty row to the penalty div
   */
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

    //adds the newly created component to the penalty div
    this.penaltyDiv.appendChild(newGroup);
  }

  /**
   * Creates a new label to be used in the rubric or penalty rows
   * 
   * @param forText the text for the "for" field of the label
   * @param text the text the label displays
   * @return the newly created label component
   */
  makeNewLabel(forText, text) {
    var newLabel = document.createElement("label");
    newLabel.htmlFor = forText;
    newLabel.innerHTML = text;

    return newLabel;
  }

  /**
   * Creates a new input for the rubric or penalty rows
   * 
   * @param inputMode the type of input the field will accept (normally either "text" or "number")
   * @param classes the classes to be applied to the component
   * @param id the id of the component
   * @return the newly created input component
   */
  makeNewInput(inputMode, classes, id) {
    var newInput = document.createElement("input");
    newInput.inputMode = inputMode;
    newInput.className = classes;
    newInput.id = id;

    return newInput;
  }

}
