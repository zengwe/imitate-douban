import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderLinkComponent } from './header-link/header-link.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    HeaderLinkComponent
  ],
  exports:[
    HeaderComponent,
    HeaderLinkComponent
  ]
})
export class HeaderModule { }
