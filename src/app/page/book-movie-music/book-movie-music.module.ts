import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookMovieMusicComponent } from './book-movie-music.component';
import { RouterModule, Routes } from '@angular/router';
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
        BookMovieMusicComponent
    ]
})
export class BookMovieMusicModule { }
