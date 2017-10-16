import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-discuss-block',
  templateUrl: './comment-discuss-block.component.html',
  styleUrls: ['./comment-discuss-block.component.scss']
})
export class CommentDiscussBlockComponent implements OnInit {
  activeComponent = 0; // 0: 评论；1：讨论
  @Input('fromId') fromId: number;
  @Input('type') type: string;
  constructor() { }

  ngOnInit() {
  }
  changeActiveComponent(activeNum: number) {
    this.activeComponent = activeNum;
  }
}
