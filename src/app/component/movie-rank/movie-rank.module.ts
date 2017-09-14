import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRankComponent } from './movie-rank.component';
import { MovieService } from '../../service/movie/movie.service';
@NgModule({
    imports: [
        CommonModule
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
