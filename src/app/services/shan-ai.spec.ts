import { TestBed } from '@angular/core/testing';

import { ShanAiService } from './shan-ai.service';

describe('ShanAi', () => {
  let service: ShanAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShanAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
