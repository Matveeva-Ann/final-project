import { TestBed } from '@angular/core/testing';

import { PromoResolver } from './promo.resolver';

describe('PromoResolver', () => {
  let resolver: PromoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PromoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
