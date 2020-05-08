import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { GlobalsService} from '../common/services/globals.service'

import DummyProgressData from "../../assets/dummyGradingProgress.json";
import DummySubmissionData from "../../assets/dummySubmissions.json";
import { ActivatedRoute } from '@angular/router';

/**
 * The important information regarding TA grading progress
 * Name: the first and last name of the teaching assistant
 * Progess: the percentage of students of their assigned students that TA has finished grading
 */
export interface TAProgress {
  name: string;
  progress: number;
}

/**
 * The important information for a student's submission
 * Name: the first and last name of the student
 * Computing Id: the UVA computing Id of the student (unique)
 * NumSubmissions: the number of submissions the student made
 * Score: the score the student received from the auto-graded portion
 * SubmissionID: the unique id of the submission of the student
 */
export interface StudentSubmission {
  name: string;
  computingId: string;
  numSubmissions: number;
  score: number;
  submissionID: number;
}

@Component({
  selector: 'app-grade-submission-list',
  templateUrl: './grade-submission-list.component.html',
  styleUrls: ['./grade-submission-list.component.scss'],
  encapsulation: ViewEncapsulation.None //ensures styling is applied to programmatically applied components
})

export class GradeSubmissionListComponent implements OnInit {

  assignment: any;

  //the div that shows the grading progress
  progressTable;

  //the list of grading TAs and their associated grading progress
  progressList: TAProgress[] = DummyProgressData.progress;

  //the data for student submissions
  submissionData;

  //the columns to be displayed in the student submission table
  displayedColumns: string[] = ['name', 'computingId', 'numSubmissions', 'score', 'actions'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private globals:GlobalsService, private route: ActivatedRoute) {
    //reads the submission data and puts them into an array
    var data = new Array();
    for(let submission of DummySubmissionData.submissions) {
      data.push({
        name: submission.name,
        computingId: submission.computingId,
        numSubmissions: submission.numSubmissions,
        score: submission.score,
        submissionID: submission.submissionID,
      })
    }

    //converts the array into a searchable and sortable table
    this.submissionData = new MatTableDataSource(data);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.assignment = this.globals.getAssignment(Number(params.get('id')));
    });

    //gets the id of the element that will display the grading progress table
    this.progressTable = document.getElementById("progressTable");

    //reads the grading progress data and creates blocks to show each TA's progress
    for(let item of this.progressList) {
      var newBlock = this.displayTAProgress(item.name, item.progress);

      this.progressTable.appendChild(newBlock);
    }

    this.submissionData.sort = this.sort;

    //defines the filtering behavior of the student submission table
    //The table will search by name and computing Id, non-case sensitive
    this.submissionData.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.computingId.toLowerCase().includes(filter);
    };
  }

  /**
   * Callback function for searching student submissions
   * Trims the search parameter and puts it all lowercase to ensure it's not case sensitive
   * @param event 
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.submissionData.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Builds a block to display the TA's grading progress
   * Puts the TA's name and a bar colored based on their current progress
   * @param name grading TA's name
   * @param progress grading TA's grading progress
   * @return a div that contains the name label and a progress bar
   */
  displayTAProgress(name, progress) {
    var newGraderProgress = document.createElement("div");
    newGraderProgress.className = "SubmissionList-graderProgress";

    var newLabel = document.createElement("p");
    newLabel.className = "SubmissionList-graderName";
    newLabel.innerHTML = name;

    var newDiv = document.createElement("div");
    newDiv.style.width = "100%";

    var newProgressBar = document.createElement("p");
    newProgressBar.innerHTML = progress + "%";
    newProgressBar.className = "SubmissionList-progressBar";
    newProgressBar.style.backgroundColor = this.getProgressBarColor(progress)
    newProgressBar.style.width = progress + "%";

    newDiv.appendChild(newProgressBar);

    newGraderProgress.appendChild(newLabel);
    newGraderProgress.appendChild(newDiv);

    return newGraderProgress;
  }

  /**
   * Calculates the color of the progress bar based on the progress percentage
   * @param progress a number less than 100 showing the percentage of students a TA has graded
   * @return the hex string of the color of the progress bar
   */
  getProgressBarColor(progress) {
    var red = 255;
    var green = 0;

    //linearly increase green if progress < 50
    if(progress < 50) {
      green = (progress/50) * 255;
    } 
    //set green to 255 and linearly decrease red for progress >= 50
    else {
      green = 255;

      progress -= 50;
      red -= (progress/50) * 255;
    }

    return "#" + this.toHex(red) +  this.toHex(green) + "00";
  }
  
  /**
   * converts the number to hex representation of its rounded integer
   * Will return at most two digits (0 < number < 255)
   * 
   * @param number the number to convert to hex
   * @return the hexadecimal representation of the number (maximum two digits)
   */
  toHex(number) {
    number = Math.round(number);
    if(number < 15) {
      return "0" + number.toString(16);
    } else if (number > 255) {
      return "FF";
    } else {
      return number.toString(16);
    }
  }
}
