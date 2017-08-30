import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { RouterModule, Routes } from '@angular/router';
const router: Routes = [
  {
    path: '',
    component: BookComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    BookComponent
  ]
})
export class BookModule { }
