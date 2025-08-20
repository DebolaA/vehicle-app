import { TestBed } from '@angular/core/testing';

import { UnSub } from './un-sub';

describe('UnSub', () => {
  let service: UnSub;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnSub);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
