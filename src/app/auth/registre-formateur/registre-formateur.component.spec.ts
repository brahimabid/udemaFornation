import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreFormateurComponent } from './registre-formateur.component';

describe('RegistreFormateurComponent', () => {
  let component: RegistreFormateurComponent;
  let fixture: ComponentFixture<RegistreFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
