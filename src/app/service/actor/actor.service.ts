import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
@Injectable()
export class ActorService {

  constructor(private request:RequestService) { }

}
