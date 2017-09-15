import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemMiniComponent } from './movie-item-mini.component';
import { StartsModule } from '../starts/starts.module';
@NgModule({
    imports: [
        CommonModule,
        StartsModule
    ],
    declarations: [
        MovieItemMiniComponent
    ],
    exports: [
        MovieItemMiniComponent
    ]
})
export class MovieItemMiniModule { }
