import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
@Injectable()
export class DiscussService {

  constructor( private request: RequestService ) { }

}
