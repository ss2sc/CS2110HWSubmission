import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import DummyProgressData from "../../assets/dummyGradingProgress.json";
import DummySubmissionData from "../../assets/dummySubmissions.json";

export interface TAProgress {
  name: string;
  progress: number;
}

export interface StudentSubmission {
  name: string;
  computingId: string;
  numSubmissions: number;
  score: number;
}

@Component({
  selector: 'app-grade-submission-list',
  templateUrl: './grade-submission-list.component.html',
  styleUrls: ['./grade-submission-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GradeSubmissionListComponent implements OnInit {

  assignmentName: string = DummySubmissionData.assignmentName;

  progressTable;
  progressList: TAProgress[] = DummyProgressData.progress;

  submissionData;
  displayedColumns: string[] = ['name', 'computingId', 'numSubmissions', 'score', 'actions'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    var data = new Array();
    for(let submission of DummySubmissionData.submissions) {
      data.push({
        name: submission.name,
        computingId: submission.computingId,
        numSubmissions: submission.numSubmissions,
        score: submission.score,
      })
    }

    console.log(data);

    this.submissionData = new MatTableDataSource(data);
  }

  ngOnInit() {
    this.progressTable = document.getElementById("progressTable");

    for(let item of this.progressList) {
      var newBlock = this.displayTAProgress(item.name, item.progress);

      this.progressTable.appendChild(newBlock);
    }

    this.submissionData.sort = this.sort;

    this.submissionData.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.computingId.toLowerCase().includes(filter);
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.submissionData.filter = filterValue.trim().toLowerCase();
  }

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

  //returns the hex representation of the color of the progress bar
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
  
  //converts the number to hex representation of its rounded integer
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
