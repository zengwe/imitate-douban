import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { commentServerRes } from './comment.struct';
@Injectable()
export class CommentService {
    constructor(private request: RequestService) { }
    getCommentList(id: number, type: 'movie',count=10):Promise<any> {
        return this.request.queryServer({url:'',method:'get'},{id:id,type:type,count:count}).then((res:commentServerRes)=>{
            return res;
        })
    }

}
