import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBlockComponent } from './card-block.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        CardBlockComponent
    ],
    exports: [
        CardBlockComponent
    ]
})
export class CardBlockModule { }
