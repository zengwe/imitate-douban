import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentDiscussBlockComponent } from './comment-discuss-block.component';
import { CommentModule } from './comment/comment.module';
import { DiscussModule } from './discuss/discuss.module';
@NgModule({
    imports: [
        CommonModule,
        DiscussModule,
        CommentModule
    ],
    declarations: [
        CommentDiscussBlockComponent
    ],
    exports: [
        CommentDiscussBlockComponent
    ]
})
export class CommentDiscussBlockModule { }
