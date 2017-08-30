import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DramaComponent } from './drama.component';
import { RouterModule, Routes } from '@angular/router';
const router: Routes = [
    {
        path: '',
        component: DramaComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(router)
    ],
    declarations: [
        DramaComponent
    ]
})
export class DramaModule { }
