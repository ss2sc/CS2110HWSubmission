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

  @ViewChild('editor', {static: false}) editor;
  files: any[] = [{filename: "File 1", content: "Placeholder Text"}];
  currFile: Number = 0;

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

  setCurrFile(index: any) {
    this.editor.text = this.files[index].content;
  }

  ngAfterViewInit() {
    this.editor.setTheme("eclipse");
    this.editor.text = this.files[0].content;
  }

  loadFiles(event: any) {
    this.files = [];
    let file = event.target.files[0];
    let numFiles = event.target.files.length;
    let fileReader = new FileReader();

    if(file.name.endsWith(".zip")) {
      fileReader.onload = (fileLoadedEvent: Event) => {
        let zip = new JSZip();
        zip.loadAsync(file).then((zip) => {
          Object.keys(zip.files).forEach((filename) => {
            zip.files[filename].async('text').then((fileData) => {
              this.files.push({filename: filename, content: fileData});
          })
        })
      })
    }} else {
      fileReader.onload = (fileLoadedEvent: Event) => {
        let text = <String>fileReader.result;
        this.files.push({filename: file.name, content: text});
      }
    }

    fileReader.readAsText(file, "UTF-8");
  }

}
