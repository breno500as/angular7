import { TestBed, async, inject } from '@angular/core/testing';
import { AdmGuard } from './AdmGuard';

describe('AdmGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmGuard]
    });
  });

  it('should ...', inject([AdmGuard], (guard: AdmGuard) => {
    expect(guard).toBeTruthy();
  }));
});
