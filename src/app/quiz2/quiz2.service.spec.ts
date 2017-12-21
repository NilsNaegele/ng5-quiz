import { TestBed, inject } from '@angular/core/testing';

import { Quiz2Service } from './quiz2.service';

describe('Quiz2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Quiz2Service]
    });
  });

  it('should be created', inject([Quiz2Service], (service: Quiz2Service) => {
    expect(service).toBeTruthy();
  }));
});
