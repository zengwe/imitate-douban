import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemBlockComponent } from './item-block.component';
import { CoverModule} from '../cover/cover.module';
import { StartsModule } from '../starts/starts.module';
@NgModule({
    imports: [
        CommonModule,
        StartsModule,
        CoverModule
    ],
    declarations: [
        ItemBlockComponent
    ],
    exports: [
        ItemBlockComponent
    ]
})
export class ItemBlockModule { }
