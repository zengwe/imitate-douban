import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
    selector: 'app-cover',
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
    @Input('coverSrc') coverSrc: string = ''
    @Input('height') height:string='1.42rem;';
    @Input('width') width:string='100%';
    constructor( private _sanitizer: DomSanitizer ) { }

    ngOnInit() {
    }
    getBackground(image) {
        return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
    }
}
