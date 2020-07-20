import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdreterminerComponent } from './ordreterminer.component';

describe('OrdreterminerComponent', () => {
  let component: OrdreterminerComponent;
  let fixture: ComponentFixture<OrdreterminerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdreterminerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdreterminerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
