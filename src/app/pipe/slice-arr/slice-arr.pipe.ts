import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sliceArr'
})
export class SliceArrPipe implements PipeTransform {

    transform(arr: any[], end: number, start = 0): any[] {
        return arr.slice(start, end);
    }

}
