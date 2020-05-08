import { Component, OnInit, ViewChild, Input } from '@angular/core';
import JSZip from 'jszip';
import "brace/index";
import "brace/mode/java";
import "brace/mode/text";
import "brace/theme/eclipse";
import AssignmentData from '../../assets/dummyAssignment.json'

@Component({
  selector: 'app-grade-submission',
  templateUrl: './grade-submission.component.html',
  styleUrls: ['./grade-submission.component.scss']
})
export class GradeSubmissionComponent implements OnInit {

  // Grabs element with id="editor". This is for the ace-editor usage
  @ViewChild('editor', {static: false}) editor;

  // List of files to display, defaulted to "File 1" - Placeholder text
  files: any[] = [{filename: "File 1", content: "Placeholder Text"}];

  // Data for assignment. 
  // TODO: Replace this implementation with a backend version
  title: string = AssignmentData.title;
  description: string = AssignmentData.description;
  dueDate: string = AssignmentData["due-date"];
  maxSubmissions: number = AssignmentData["max-submissions"];
  rubric: Object = AssignmentData["rubric"];
  penalties: Object = AssignmentData["late-policy"];
  hasTests: boolean = AssignmentData["expecting-tests"];

  constructor() {
  }

  ngOnInit() {

  }

  // Set the text in the editor
  setCurrFile(index: any) {
    this.editor.text = this.files[index].content;
  }

  // Do ace-editor configuration here
  ngAfterViewInit() {
    this.editor.setTheme("eclipse");
  }

  loadFiles(event: any) {
    this.files = [];  // Empty the files array
    let file = event.target.files[0];  // TODO: Load in file from backend instead of uploading file here.
    let fileReader = new FileReader();

    // Asyncronously load files in. Can use this as an example for other zip file loading (like JUnit tests)
    // If you modify, make sure it's for stuff within the file. If you try to modify things outside you might 
    // run into async errors, or make sure those things are waiting for this function to be finished (maybe through
    // subscriptions or promises)
    if(file.name.endsWith(".zip")) {
      fileReader.onload = () => {
        let zip = new JSZip();
        zip.loadAsync(file).then((zip) => {  // Load the file
          Object.keys(zip.files).forEach((filename) => {  // For each file in zip file
            zip.files[filename].async('text').then((fileData) => {  // load in content as text and do stuff
              this.files.push({filename: filename, content: fileData});
            })
          })
        })
      } 
    } else {
      fileReader.onload = () => {  // Load singular file and do stuff
        let text = <String>fileReader.result;
        this.files.push({filename: file.name, content: text});
      }
    }

    fileReader.readAsText(file, "UTF-8");
  }

}
