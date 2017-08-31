import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, Input } from '@angular/core';
declare let Swiper: any;
@Component({
    selector: 'app-card-block',
    templateUrl: './card-block.component.html',
    styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent implements OnInit {
    @ViewChild('itemTarget') itemTarget: ElementRef;
    @Input('title') title: string = '标题';
    @Input('linkTo') linkTo: string ='';
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // console.log(document.body.offsetWidth);
        // console.log(document.body.offsetWidth/this.itemTarget.nativeElement.children[0].children[0].clientWidth)
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 10,
            freeMode: true,
            // width:this.itemTarget.nativeElement.children[0].children[0].clientWidth
        });
    }
}
