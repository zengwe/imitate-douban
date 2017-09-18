import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBigerComponent } from './info-biger.component';
import { StartsModule } from '../starts/starts.module';
import { LinkBlockComponent } from './link-block/link-block.component';

@NgModule({
  imports: [
    CommonModule,
    StartsModule
  ],
  declarations: [
    InfoBigerComponent,
    LinkBlockComponent
  ],
  exports:[
    InfoBigerComponent,
    LinkBlockComponent
  ]
})
export class InfoBigerModule { }
