import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from '../../pipe/format-date/format-date.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormatDatePipe
  ],
  exports:[
    FormatDatePipe
  ]
})
export class ShareModule { }
