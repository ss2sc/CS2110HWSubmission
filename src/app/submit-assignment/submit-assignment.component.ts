import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalsService } from '../common/services/globals.service';

@Component({
  selector: 'app-submit-assignment',
  templateUrl: './submit-assignment.component.html',
  styleUrls: ['./submit-assignment.component.scss']
})
export class SubmitAssignmentComponent implements OnInit {

  assignment: any;

  constructor(private globals: GlobalsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.assignment = this.globals.getAssignment(Number(params.get('id')));
    });

    // Sicc collapsible stuff
    var coll = document.getElementsByClassName("collapsible");
    
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            document.getElementsByClassName("down-caret")[0].classList.toggle("active");

            var content = this.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
  }
}
