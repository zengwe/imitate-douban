import { TestBed, inject } from '@angular/core/testing';

import { MovieCommentService } from './movie-comment.service';

describe('MovieCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieCommentService]
    });
  });

  it('should be created', inject([MovieCommentService], (service: MovieCommentService) => {
    expect(service).toBeTruthy();
  }));
});
