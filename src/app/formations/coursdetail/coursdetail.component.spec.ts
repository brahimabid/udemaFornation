import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursdetailComponent } from './coursdetail.component';

describe('CoursdetailComponent', () => {
  let component: CoursdetailComponent;
  let fixture: ComponentFixture<CoursdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
