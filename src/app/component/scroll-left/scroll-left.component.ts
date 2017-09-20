import { Component, OnInit, AfterViewInit, OnDestroy, AfterViewChecked } from '@angular/core';
declare let Swiper: any;
@Component({
    selector: 'app-scroll-left',
    templateUrl: './scroll-left.component.html',
    styleUrls: ['./scroll-left.component.scss']
})
export class ScrollLeftComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {

    containerName = 'container';
    private swiperInstance = null;
    constructor() {
        this.containerName = this.containerName + String(this.GetRandomNum(1, 100000000000));
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // console.log(document.body.offsetWidth);
        // console.log(document.body.offsetWidth/this.itemTarget.nativeElement.children[0].children[0].clientWidth)
        this.swiperInstance = new Swiper('#' + this.containerName, {
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 10,
            freeMode: true,
            // width:this.itemTarget.nativeElement.children[0].children[0].clientWidth
        });
    }
    ngAfterViewChecked() {
        if (this.swiperInstance != null) {
            this.swiperInstance.update();
        }
    }
    private GetRandomNum(Min: number, Max: number): number {
        const Range = Max - Min;
        const Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }
    ngOnDestroy() {
        this.swiperInstance.destroy();
    }
}
