import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstructorsComponent } from './add-instructors.component';

describe('AddInstructorsComponent', () => {
  let component: AddInstructorsComponent;
  let fixture: ComponentFixture<AddInstructorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInstructorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
