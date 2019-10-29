import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentTeaserComponent } from './assignment-teaser.component';

describe('AssignmentTeaserComponent', () => {
  let component: AssignmentTeaserComponent;
  let fixture: ComponentFixture<AssignmentTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
