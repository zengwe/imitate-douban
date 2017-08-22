import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import { RouterModule, Routes } from '@angular/router';
const route: Routes = [
    {
        path: '',
        component: EmptyComponent
    }
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(route)
    ],
    declarations: [
        EmptyComponent
    ]
})
export class EmptyModule { }
