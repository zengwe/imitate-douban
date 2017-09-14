# ImitateDouban

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# angular学习总结六——管道的用法
## 管道的写法
可用使用 ng g s formatDate生成一个formatDate的类
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

    transform(timestamp: number, fmt = 'yyyy-MM-dd hh:mm') {
        if( timestamp <999999999){
            timestamp*=1000;
        }
        let date: any = new Date(timestamp);
        let o = {
            'M+': date.getMonth() + 1, //月份 
            'd+': date.getDate(), //日 
            'h+': date.getHours(), //小时 
            'm+': date.getMinutes(), //分 
            's+': date.getSeconds(), //秒 
            'q+': Math.floor((date.getMonth() + 3) / 3), //季度 
            'S': date.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        for (let k in o)
            if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        return fmt;
    }

}
```
其中name是管道的名称，模板中调用管道相当于调用的是FormatDatePipe的transform方法  
管道很组件一样需要在module中declear才可以使用，写常用的管道会出现一个十分蛋疼的问题，在上一层的module中declear了子module显示的却是未声明，但是去子module声明报错显示的是声明了两次，简直抓狂！解决办法，写share.module在里面declares，并且exports导出，然后在需要使用的module中import即可
## 管道在模板中的使用
```html
<span>{{time.time | formatDate:'MM月dd日'}}</span>
```
许多写博客的只写了一个参数的情况，这就比较蛋疼了  
time.time是component中的变量，formatDate是管道的name，time.time相当于传入管道transform方法中的第一个参数，formatDate：''后面的参数是传入的第二参数，还有多就，号分割

