import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { RouterModule, Routes } from '@angular/router';
const router: Routes = [
    {
        path: '',
        component: MusicComponent
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(router)
    ],
    declarations: [
        MusicComponent
    ]
})
export class MusicModule { }
