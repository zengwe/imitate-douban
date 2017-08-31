import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { CardBlockModule } from '../../component/card-block/card-block.module';
import { ItemBlockModule } from '../../component/item-block/item-block.module';
@NgModule({
    imports: [
        CommonModule,
        ItemBlockModule,
        CardBlockModule
    ],
    declarations: [
        MovieComponent
    ]
})
export class MovieModule { }
