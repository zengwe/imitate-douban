import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../page/home/home.component';
import { ZContainerComponent } from '../component/z-container/z-container.component';
import { HomeModule } from "../page/home/home.module";
const route:Routes=[
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path: '',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'**',
        loadChildren:'../component/empty/empty.module#EmptyModule'
    }
]
@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        HomeModule,
        RouterModule,
        RouterModule.forRoot(route)
    ],
    declarations: [
        ZContainerComponent
    ],
    exports: [
        HttpModule,
        RouterModule,
        ZContainerComponent
    ]
})
export class CoreModule { }
