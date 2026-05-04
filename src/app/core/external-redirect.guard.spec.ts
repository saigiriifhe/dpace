import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { externalRedirectGuard } from './external-redirect.guard';

describe('externalRedirectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => externalRedirectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
