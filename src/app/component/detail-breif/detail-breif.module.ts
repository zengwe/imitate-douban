import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailBreifComponent } from './detail-breif.component';
import { DetailBreifTextComponent } from './detail-breif-text/detail-breif-text.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DetailBreifComponent,
    DetailBreifTextComponent
  ],
  exports:[
    DetailBreifComponent,
    DetailBreifTextComponent
  ]
})
export class DetailBreifModule { }
