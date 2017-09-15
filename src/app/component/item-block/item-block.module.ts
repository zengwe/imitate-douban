import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemBlockComponent } from './item-block.component';
import { CoverComponent } from '../cover/cover.component';
import { StartsModule } from '../starts/starts.module';
@NgModule({
    imports: [
        CommonModule,
        StartsModule
    ],
    declarations: [
        ItemBlockComponent,
        CoverComponent
    ],
    exports: [
        ItemBlockComponent
    ]
})
export class ItemBlockModule { }
