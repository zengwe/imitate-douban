import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemMaxComponent } from './movie-item-max.component';
import { StartsModule } from '../starts/starts.module';
@NgModule({
    imports: [
        CommonModule,
        StartsModule
    ],
    declarations: [
        MovieItemMaxComponent
    ],
    exports: [
        MovieItemMaxComponent
    ]
})
export class MovieItemMaxModule { }
