import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { StartsModule } from '../../starts/starts.module';
@NgModule({
  imports: [
    CommonModule,
    StartsModule
  ],
  declarations: [
    CommentComponent,
    CommentItemComponent
  ],
  exports:[
    CommentComponent
  ]
})
export class CommentModule { }
