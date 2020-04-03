import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAssignmentComponent } from './modify-assignment.component';

describe('ModifyAssignmentComponent', () => {
  let component: ModifyAssignmentComponent;
  let fixture: ComponentFixture<ModifyAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
