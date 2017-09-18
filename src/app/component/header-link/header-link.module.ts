import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLinkComponent } from './header-link.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderLinkComponent
  ],
  exports:[
    HeaderLinkComponent
  ]
})
export class HeaderLinkModule { }
