import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from '../../pipe/format-date/format-date.pipe';
import { TimeHorizonPipe} from '../../pipe/time-horizon/time-horizon.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormatDatePipe,
    TimeHorizonPipe
  ],
  exports:[
    FormatDatePipe,
    TimeHorizonPipe
  ]
})
export class ShareModule { }
