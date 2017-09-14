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
    containerName="container";
    private swiperInstance=null;
    constructor() {
        this.containerName=this.containerName+String(this.GetRandomNum(1,100000000000));
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // console.log(document.body.offsetWidth);
        // console.log(document.body.offsetWidth/this.itemTarget.nativeElement.children[0].children[0].clientWidth)
        this.swiperInstance= new Swiper('#'+this.containerName, {
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 10,
            freeMode: true,
            // width:this.itemTarget.nativeElement.children[0].children[0].clientWidth
        });
    }
    ngAfterViewChecked(){
        if(this.swiperInstance!=null){
            this.swiperInstance.update();
        }
    }
    private GetRandomNum(Min:number,Max:number):number{   
        let Range = Max - Min;   
        let Rand = Math.random();   
        return(Min + Math.round(Rand * Range));   
    }
    ngOnDestroy(){
        this.swiperInstance.destroy();
    }     
}
