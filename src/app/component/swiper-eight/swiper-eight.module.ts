import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperEightComponent } from './swiper-eight.component';
import { SwiperItemComponent } from './swiper-item/swiper-item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SwiperEightComponent,
        SwiperItemComponent
    ],
    exports: [
        SwiperEightComponent,
        SwiperItemComponent
    ]
})
export class SwiperEightModule { }
