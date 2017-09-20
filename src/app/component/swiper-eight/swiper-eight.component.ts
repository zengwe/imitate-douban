import { Component, Output, Input, OnInit, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';

declare let Swiper: any;
@Component({
    selector: 'app-swiper-eight',
    templateUrl: './swiper-eight.component.html',
    styleUrls: ['./swiper-eight.component.scss']
})
export class SwiperEightComponent implements OnInit, AfterViewInit, OnDestroy {
    swiperInstance: any = null;
    componentName = 'SwiperEightComponent';
    @Output('getCurrentIndex') getCurrentIndex: EventEmitter<number> = new EventEmitter();
    @Input('width') width = '80';
    @Input('spaceBetween') spaceBetween = 20;
    constructor() {
        this.componentName += this.GetRandomNum(1, 1000);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.swiperInstance = new Swiper('#' + this.componentName, {
            pagination: '.swiper-pagination',
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: this.spaceBetween,
            onSlideChangeEnd: (data) => {
                if (this.getCurrentIndex !== undefined) {
                    this.getCurrentIndex.emit(data.activeIndex);
                }
            }
        });
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
