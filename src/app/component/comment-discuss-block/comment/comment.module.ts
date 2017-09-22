import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { StartsModule } from '../../starts/starts.module';
import { CommentService } from '../../../service/comment/comment.service';
import { ShareModule } from '../../../core/share/share.module';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        StartsModule,
        ShareModule,
        RouterModule
    ],
    declarations: [
        CommentComponent,
        CommentItemComponent
    ],
    exports: [
        CommentComponent
    ],
    providers: [
        CommentService
    ]
})
export class CommentModule { }
