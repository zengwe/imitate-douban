import { TestBed, inject } from '@angular/core/testing';

import { MovieTypeService } from './movie-type.service';

describe('MovieTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieTypeService]
    });
  });

  it('should be created', inject([MovieTypeService], (service: MovieTypeService) => {
    expect(service).toBeTruthy();
  }));
});
