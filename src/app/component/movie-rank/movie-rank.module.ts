import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRankComponent } from './movie-rank.component';
import { MovieService } from '../../service/movie/movie.service';
import { MovieItemMiniModule } from '../movie-item-mini/movie-item-mini.module';
@NgModule({
    imports: [
        CommonModule,
        MovieItemMiniModule
    ],
    declarations: [
        MovieRankComponent
    ],
    exports: [
        MovieRankComponent
    ],
    providers: [
        MovieService
    ]
})
export class MovieRankModule { }
