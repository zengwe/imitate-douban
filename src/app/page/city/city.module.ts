import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city.component';
import { RouterModule, Routes } from '@angular/router';
const router: Routes = [
    {
        path: '',
        component: CityComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(router)
    ],
    declarations: [
        CityComponent
    ]
})
export class CityModule { }
