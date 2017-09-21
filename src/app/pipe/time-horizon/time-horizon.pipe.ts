import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeHorizon'
})
export class TimeHorizonPipe implements PipeTransform {
    transform(timestamp: number): string {
        if(isNaN(timestamp)){
            return '未知';
        }
        if (timestamp < 999999999) {
            timestamp *= 1000;
        }
        const nowTimeStramp = new Date().getTime();
        const time = nowTimeStramp - timestamp;
        const oneDay = 1000*60*60*24;
        const days = Math.ceil(time/oneDay);
        if ( days>365 ){
            return '1年前';
        }
        if ( days>365/2 ){
            return '半年前';
        }
        if ( days> 90 ){
            return '3个月前';
        }
        if ( days>30 ){
            return '1个月前';
        }
        if ( days>7){
            return '1周前';
        }
        if ( days>1 ){
            return '1天前';
        }
        if ( days == 1 ){
            return '刚刚';
        }
    }

}
