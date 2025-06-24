import { TestBed } from '@angular/core/testing';

import { DBServiceService } from './db-service.service';

describe('DBServiceService', () => {
  let service: DBServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
