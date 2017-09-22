import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../../service/comment/comment.service';
import { commentServerRes, comment } from '../../../service/comment/comment.struct';
@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
    @Input('id') id: number;
    @Input('type') type: string;
    comments:comment[] = [];
    totalCount = 0;
    constructor(private commentService: CommentService) {

    }

    ngOnInit() {
        this.commentService.getCommentList(this.id,'movie',10).then((res:commentServerRes)=>{
            this.comments =res.data;
            this.totalCount = res.count;
            console.log(res);
        });
    }
    voteToComment(id:number){
        console.log(id);
        console.log(this.comments);
    }
}
