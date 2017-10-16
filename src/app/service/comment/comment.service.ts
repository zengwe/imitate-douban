import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { serverRes } from '../request/request.struct';
import { commentServerRes } from './comment.struct';
@Injectable()
export class CommentService {
    constructor(private request: RequestService) { }
    getCommentList(id: number, type: 'movie', count = 10): Promise<any> {
        return this.request.queryServer({ url: '/assets/data/comments.json', method: 'get' }, { id: id, type: type, count: count })
        .then((res: commentServerRes) => {
            return res;
        });
    }
    vote(id: number, type: string): Promise<boolean> {
        return this.request.queryServer({ url: '/assets/data/success.json', method: 'get' }, { id: id, type: type }).then((res) => {
            return res;
        });
    }
}
