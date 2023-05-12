import { TestBed } from '@angular/core/testing';

import { GptBackendService } from './gpt-backend.service';

describe('GptBackendService', () => {
  let service: GptBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GptBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
