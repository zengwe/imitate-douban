import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ZContainerModule } from '../../component/z-container/z-container.module';
import { HeaderModule } from '../../component/header/header.module';
import { InfoBigerModule } from '../../component/info-biger/info-biger.module';
import { DetailBreifModule } from '../../component/detail-breif/detail-breif.module';
import { ScrollLeftModule } from '../../component/scroll-left/scroll-left.module';
import { ItemBlockModule } from '../../component/item-block/item-block.module';
import { SwiperEightModule } from '../../component/swiper-eight/swiper-eight.module';
import { CoverModule } from '../../component/cover/cover.module';
const router: Routes = [
  {
    path: '',
    component: MovieDetailComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    ZContainerModule,
    HeaderModule,
    InfoBigerModule,
    RouterModule,
    DetailBreifModule,
    ScrollLeftModule,
    ItemBlockModule,
    SwiperEightModule,
    CoverModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    MovieDetailComponent
  ]
})
export class MovieDetailModule { }
