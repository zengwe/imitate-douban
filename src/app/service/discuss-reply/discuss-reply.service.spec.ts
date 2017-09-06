import { TestBed, inject } from '@angular/core/testing';

import { DiscussReplyService } from './discuss-reply.service';

describe('DiscussReplyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscussReplyService]
    });
  });

  it('should be created', inject([DiscussReplyService], (service: DiscussReplyService) => {
    expect(service).toBeTruthy();
  }));
});
