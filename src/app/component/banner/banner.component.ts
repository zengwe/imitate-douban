import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
declare let Swiper: any;
@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {
    @Input('height') height: string;
    constructor() { }

    ngOnInit() {
    }
    ngAfterViewInit() {
        const swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 3000,
            loop: true
        });
        // console.log(swiper);
    }
}
