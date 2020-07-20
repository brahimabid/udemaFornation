import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurprofilComponent } from './utilisateurprofil.component';

describe('UtilisateurprofilComponent', () => {
  let component: UtilisateurprofilComponent;
  let fixture: ComponentFixture<UtilisateurprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
