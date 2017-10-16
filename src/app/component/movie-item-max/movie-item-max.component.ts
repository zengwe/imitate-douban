import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
    selector: 'app-movie-item-max',
    templateUrl: './movie-item-max.component.html',
    styleUrls: ['./movie-item-max.component.scss']
})
export class MovieItemMaxComponent implements AfterViewInit {
    @Input('cover') cover: string;
    @Input('info') info: { name: string, value: string }[];
    @Input('name') name: string;
    @Input('score') score: number;
    @Input('desc') desc: string;
    constructor(private _sanitizer: DomSanitizer) {

    }
    getBackground(image) {
        return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
    }
    ngAfterViewInit() {
        console.log(this.info);
    }
}
