import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollLeftComponent } from './scroll-left.component';
import { PerItemComponent } from './per-item/per-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScrollLeftComponent,
    PerItemComponent
  ],
  exports:[
    ScrollLeftComponent,
    PerItemComponent
  ]
})
export class ScrollLeftModule { }
