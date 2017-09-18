import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ZContainerModule } from '../../component/z-container/z-container.module';
import { HeaderModule } from '../../component/header/header.module';
import { HeaderLinkModule } from '../../component/header-link/header-link.module';
import { InfoBigerModule } from '../../component/info-biger/info-biger.module'
const router: Routes=[
  {
    path:'',
    component:MovieDetailComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    ZContainerModule,
    HeaderModule,
    InfoBigerModule,
    RouterModule,
    HeaderLinkModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    MovieDetailComponent
  ]
})
export class MovieDetailModule { }
