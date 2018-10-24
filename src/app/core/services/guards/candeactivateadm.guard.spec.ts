import { inject, TestBed } from '@angular/core/testing';
import { CanDeactivateAdmGuard } from './candeactivateadm.guard';


describe('CandeactivateadmGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateAdmGuard]
    });
  });

  it('should ...', inject([CanDeactivateAdmGuard], (guard: CanDeactivateAdmGuard) => {
    expect(guard).toBeTruthy();
  }));
});
