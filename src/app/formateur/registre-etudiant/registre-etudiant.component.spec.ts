import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreEtudiantComponent } from './registre-etudiant.component';

describe('RegistreEtudiantComponent', () => {
  let component: RegistreEtudiantComponent;
  let fixture: ComponentFixture<RegistreEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
