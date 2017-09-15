import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartsComponent } from './starts.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StartsComponent
  ],
  exports:[
    StartsComponent
  ]
})
export class StartsModule { }
