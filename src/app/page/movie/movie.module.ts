import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { CardBlockModule } from '../../component/card-block/card-block.module';
import { ItemBlockModule } from '../../component/item-block/item-block.module';
import { MovieService } from '../../service/movie/movie.service';
import { MovieRankModule } from '../../component/movie-rank/movie-rank.module';
import { MovieItemMaxModule } from '../../component/movie-item-max/movie-item-max.module';
import { StartsModule } from '../../component/starts/starts.module';
import { RouterModule, Routes } from '@angular/router';

const router: Routes=[
    {
        path:'detail/:id',
        loadChildren: '../movie-detail/movie-detail.module#MovieDetailModule'
    }
]
@NgModule({
    imports: [
        CommonModule,
        ItemBlockModule,
        CardBlockModule,
        MovieRankModule,
        MovieItemMaxModule,
        StartsModule,
        RouterModule,
        RouterModule.forChild(router)
    ],
    declarations: [
        MovieComponent
    ],
    providers: [
        MovieService
    ]
})
export class MovieModule { }
