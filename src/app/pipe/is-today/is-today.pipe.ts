import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'isToday'
})
export class IsTodayPipe implements PipeTransform {

    transform(value: number): boolean {
        if (value < 999999999) {
            value * 1000;
        }
        let now = new Date();
        let getDate = new Date(value);
        if (now.getFullYear != getDate.getFullYear) {
            return false;
        }
        if (now.getMonth != getDate.getMonth) {
            return false;
        }
        if (now.getDay != getDate.getDate) {
            return false;
        }
        return true;
    }

}
