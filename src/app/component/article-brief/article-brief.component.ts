import { Component, OnInit, Input } from '@angular/core';
import { article } from '../../service/article.struct';
@Component({
  selector: 'app-article-brief',
  templateUrl: './article-brief.component.html',
  styleUrls: ['./article-brief.component.scss']
})
export class ArticleBriefComponent implements OnInit {
  @Input('article') article:article;
  constructor() { }

  ngOnInit() {
  }

}
