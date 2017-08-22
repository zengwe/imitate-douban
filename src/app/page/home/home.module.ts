import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerModule } from '../../component/banner/banner.module';
import { ArticleBriefComponent } from '../../component/article-brief/article-brief.component';
@NgModule({
  imports: [
    CommonModule,
    BannerModule
  ],
  declarations: [
    HomeComponent,
    ArticleBriefComponent
  ]
})
export class HomeModule { }
