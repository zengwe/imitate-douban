# angular学习总结四——路由的用法
# create by zengwe
# angular2/4 路由
## 需要引入的包
```typescript
import { RouterModule, Routes } from '@angular/router';
//RouterModule 需要被module引入的
//Routes  路由映射的interface
```
## 根module的写法
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../page/home/home.component';
import { ZContainerModule } from '../component/z-container/z-container.module';
import { HomeModule } from '../page/home/home.module';
import { ShareModule } from './share/share.module';
const route: Routes = [
    {
        path: 'home',
        component: HomeComponent//需要在<router-outlet>显示的组件
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'book-movie-music',
        loadChildren: '../page/book-movie-music/book-movie-music.module#BookMovieMusicModule'
        //惰性加载相关下次写
    },
    {
        path: '**',
        loadChildren: '../component/empty/empty.module#EmptyModule'
    }
];
@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        HomeModule,
        ZContainerModule,
        RouterModule,//好像是必须引入这个识别<router-outlet>以及路由指令的识别
        RouterModule.forRoot(route)
        //forRoot的意思是相对与index.html中的<base href="">这个路径
    ],
    declarations: [
    ],
    exports: [
        HttpModule,
        RouterModule,
        ZContainerModule
    ]
})
export class CoreModule { }
```
## 在html中的写法
```html
<div>
    <app-z-container top="0rem" bottom="0.6rem">
        <router-outlet></router-outlet>
    </app-z-container>
    <div class="nav-bar-bottom">
        <a class="navigation" routerLinkActive="active" routerLink="home">
            <i class="nav-icon icon-home"></i>
            <span>首页</span>
        </a>
        <a class="navigation" routerLinkActive="active" routerLink="book-movie-music">
            <i class="nav-icon book-movie-music"></i>
            <span>书影音</span>
        </a>
        <a class="navigation" href="">
            <i class="nav-icon icon-broadcast"></i>
            <span>广播</span>
        </a>
        <a class="navigation" href="">
            <i class="nav-icon icon-group"></i>
            <span>小组</span>
        </a>
        <a class="navigation" href="">
            <i class="nav-icon icon-mine"></i>
            <span>我的</span>
        </a>
    </div>
</div>
```
其中<router-outlet></router-outlet>就是路由对应组件显示的位置，routerLink="home"这相当于a标签的herf路由跳转
routerLinkActive="active"这个的意思的当现在的路由与routerLink="home"相同时添加active这个样式类
## 子路由中module的写法
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookMovieMusicComponent } from './book-movie-music.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../../component/header/header.component';
import { HeaderLinkComponent } from '../../component/header-link/header-link.component';
import { MovieModule } from '../movie/movie.module';
import { MovieComponent } from '../movie/movie.component';
import { ZContainerModule} from '../../component/z-container/z-container.module';
@NgModule({
    imports: [
        CommonModule,
        MovieModule,
        RouterModule,
        ZContainerModule,
        RouterModule.forChild([//这里是forChild的意思是相对于父路由的相对位置
            {
                path: '',
                component: BookMovieMusicComponent,
                children: [
                    {
                        path: '',
                        component: MovieComponent
                    },
                    {
                        path: 'movie',
                        component: MovieComponent
                    },
                    {
                        path: 'book',
                        loadChildren: '../book/book.module#BookModule'
                    },
                    {
                        path: 'drama',
                        loadChildren: '../drama/drama.module#DramaModule'
                    },
                    {
                        path: 'city',
                        loadChildren: '../city/city.module#CityModule'
                    },
                    {
                        path: 'music',
                        loadChildren: '../music/music.module#MusicModule'
                    }
                ]
            }
        ])
    ],
    declarations: [
        BookMovieMusicComponent,
        HeaderComponent,
        HeaderLinkComponent
    ]
})
export class BookMovieMusicModule { }
```
html的写法和上面的相似
