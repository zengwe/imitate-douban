import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemBlockComponent } from './item-block.component';
import { CoverComponent } from '../cover/cover.component';
import { StartsComponent } from '../starts/starts.component';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ItemBlockComponent,
        CoverComponent,
        StartsComponent
    ],
    exports: [
        ItemBlockComponent
    ]
})
export class ItemBlockModule { }
