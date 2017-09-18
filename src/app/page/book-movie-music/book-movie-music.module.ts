import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookMovieMusicComponent } from './book-movie-music.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../../component/header/header.component';
import { HeaderLinkComponent } from '../../component/header-link/header-link.component';
import { MovieModule } from '../movie/movie.module';
import { MovieComponent } from '../movie/movie.component';
import { ZContainerModule} from '../../component/z-container/z-container.module';
import { HeaderModule } from '../../component/header/header.module';
import { HeaderLinkModule } from '../../component/header-link/header-link.module';
const router: Routes=[
    {
        path: '',
        component: BookMovieMusicComponent,
        children: [
            {
                path: '',
                component: MovieComponent
            },
            {
                path: 'movie',
                component: MovieComponent
            },
            {
                path: 'book',
                loadChildren: '../book/book.module#BookModule'
            },
            {
                path: 'drama',
                loadChildren: '../drama/drama.module#DramaModule'
            },
            {
                path: 'city',
                loadChildren: '../city/city.module#CityModule'
            },
            {
                path: 'music',
                loadChildren: '../music/music.module#MusicModule'
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule,
        MovieModule,
        RouterModule,
        ZContainerModule,
        HeaderModule,
        HeaderLinkModule,
        RouterModule.forChild(router)
    ],
    declarations: [
        BookMovieMusicComponent
    ]
})
export class BookMovieMusicModule { }
