import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
    selector: 'app-info-biger',
    templateUrl: './info-biger.component.html',
    styleUrls: ['./info-biger.component.scss']
})
export class InfoBigerComponent implements OnInit {
    @Input('cover') cover = '';
    @Input('title') title = '';
    @Input('infoArr') infoArr: { name: string, value: string }[] = [];
    @Input('score') score = 0.0;
    @Input('scorePeople') scorePeople = 0;
    constructor(private _sanitizer: DomSanitizer) { }
    ngOnInit() {
    }
    getBackground(image) {
        return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
    }
}
