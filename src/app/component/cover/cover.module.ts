import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent } from './cover.component';
import { CoverFullScreenComponent } from './cover-full-screen/cover-full-screen.component';
import { RouterModule, Routes } from '@angular/router';

const router:Routes=[
  {
    path:'image-full',
    component: CoverFullScreenComponent
  }
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CoverFullScreenComponent,
    CoverComponent
  ],
  exports:[
    CoverComponent
  ]
})
export class CoverModule { }
