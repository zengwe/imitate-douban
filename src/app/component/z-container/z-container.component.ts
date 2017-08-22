import { Component, Input, Output, AfterViewInit } from '@angular/core';
declare let Swiper: any;
@Component({
    selector: 'app-z-container',
    templateUrl: './z-container.component.html',
    styleUrls: ['./z-container.component.scss']
})
export class ZContainerComponent {
    @Input('top') top: string = '0rem';
    @Input('bottom') bottom: string = '0.6rem';
    constructor() {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
    }
}
