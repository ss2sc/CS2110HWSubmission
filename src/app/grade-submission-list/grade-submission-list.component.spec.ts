import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSubmissionListComponent } from './grade-submission-list.component';

describe('GradeSubmissionListComponent', () => {
  let component: GradeSubmissionListComponent;
  let fixture: ComponentFixture<GradeSubmissionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeSubmissionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeSubmissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
