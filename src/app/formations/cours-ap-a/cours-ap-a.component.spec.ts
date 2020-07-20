import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursApAComponent } from './cours-ap-a.component';

describe('CoursApAComponent', () => {
  let component: CoursApAComponent;
  let fixture: ComponentFixture<CoursApAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursApAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursApAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
