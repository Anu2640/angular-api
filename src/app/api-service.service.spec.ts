import { TestBed } from '@angular/core/testing';

import { ApiServerService } from './api-server.service';

describe('ApiServiceService', () => {
  let service: ApiServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
