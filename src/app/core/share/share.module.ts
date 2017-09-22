import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from '../../pipe/format-date/format-date.pipe';
import { TimeHorizonPipe } from '../../pipe/time-horizon/time-horizon.pipe';
import { SliceArrPipe } from '../../pipe/slice-arr/slice-arr.pipe';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FormatDatePipe,
        TimeHorizonPipe,
        SliceArrPipe
    ],
    exports: [
        FormatDatePipe,
        TimeHorizonPipe,
        SliceArrPipe
    ]
})
export class ShareModule { }
