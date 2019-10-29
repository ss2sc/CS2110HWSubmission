import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTeaserComponent } from './course-teaser.component';

describe('CourseTeaserComponent', () => {
  let component: CourseTeaserComponent;
  let fixture: ComponentFixture<CourseTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
