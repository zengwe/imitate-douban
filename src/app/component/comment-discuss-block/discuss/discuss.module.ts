import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussDetailComponent } from './discuss-detail/discuss-detail.component';
import { DiscussListComponent } from './discuss-list/discuss-list.component';
import { DiscussPageComponent } from './discuss-page/discuss-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DiscussDetailComponent,
    DiscussPageComponent,
    DiscussListComponent
  ],
  exports:[
    DiscussListComponent
  ]
})
export class DiscussModule { }
