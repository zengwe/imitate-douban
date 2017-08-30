import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookMovieMusicComponent } from './book-movie-music.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../../component/header/header.component';
import { HeaderLinkComponent } from '../../component/header-link/header-link.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild([
            {
                path: '',
                component:BookMovieMusicComponent
            }
        ])
    ],
    declarations: [
        BookMovieMusicComponent,
        HeaderComponent,
        HeaderLinkComponent
    ]
})
export class BookMovieMusicModule { }
