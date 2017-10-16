import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
    selector: 'app-header-link',
    templateUrl: './header-link.component.html',
    styleUrls: ['./header-link.component.scss']
})
export class HeaderLinkComponent implements OnInit, AfterViewInit {
    @Input('iconType') iconType = '';
    @Input('iconLink') iconLink = '';
    @Input('backgroundSize') backgroundSize = '50% 50%';
    private baseUrl = '/assets/icon/';
    iconSrc = '';
    constructor(private _sanitizer: DomSanitizer) { }

    ngOnInit() {
    }
    ngAfterViewInit() {
        switch (this.iconType) {
            case 'search':
                this.iconSrc = this.baseUrl + 'ic_actionbar_search_icon.png';
                break;
            case 'chat':
                this.iconSrc = this.baseUrl + 'ic_chat_green.png';
                break;
            case 'share':
                this.iconSrc = this.baseUrl + 'live_share_icon.png';
                break;
            default:
                throw new Error('not find this icon and link');
        }
    }
    getBackground(image) {
        return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(255, 0, 0, 0), rgba(255, 0, 0, 0)), url(${image})`);
    }
}
