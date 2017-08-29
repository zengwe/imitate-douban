import { Component, OnInit, Input } from '@angular/core';
import { article } from '../../service/article/article.struct';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-article-img',
    templateUrl: './article-img.component.html',
    styleUrls: ['./article-img.component.scss']
})
export class ArticleImgComponent implements OnInit {
    @Input('article') article:article;
    constructor(
        private _sanitizer: DomSanitizer
    ) { }

    ngOnInit() {
    }
    getBackground(image) {
        return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
    }
}
