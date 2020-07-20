import { TestBed, async, inject } from '@angular/core/testing';

import { VerifGuard } from './verif.guard';

describe('VerifGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifGuard]
    });
  });

  it('should ...', inject([VerifGuard], (guard: VerifGuard) => {
    expect(guard).toBeTruthy();
  }));
});
