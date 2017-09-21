import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-comment-item',
    templateUrl: './comment-item.component.html',
    styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
    @Input('header') header = '';
    @Input('username') username = '';
    @Input('score') score = 0;
    @Input('vote') vote =0;
    @Input('content') content = '';
    @Input('time') time = 0;
    @Output('clickVote') clickVote: EventEmitter<any> = new EventEmitter();
    constructor(private _sanitizer: DomSanitizer) { }

    ngOnInit() {
    }
    getBackground(image) {
        if (image==undefined||image==''){
            image='/assets/icon/avatar_male_100.png';
        }
        return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
    }
    triggerVote(){
        this.clickVote.emit();
    }
}
