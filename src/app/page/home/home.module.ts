import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerModule } from '../../component/banner/banner.module';
import { ArticleBriefComponent } from '../../component/article-brief/article-brief.component';
import { ArticleService } from '../../service/article/article.service';
import { IsTodayPipe } from '../../pipe/is-today/is-today.pipe';
import { ShareModule } from '../../core/share/share.module';
import { ArticleImgComponent } from '../../component/article-img/article-img.component'
@NgModule({
  imports: [
    CommonModule,
    BannerModule,
    ShareModule
  ],
  declarations: [
    HomeComponent,
    ArticleBriefComponent,
    ArticleImgComponent,
    IsTodayPipe
  ],
  providers:[ArticleService]
})
export class HomeModule { }
