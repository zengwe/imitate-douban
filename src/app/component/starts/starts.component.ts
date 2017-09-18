import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'app-starts',
    templateUrl: './starts.component.html',
    styleUrls: ['./starts.component.scss']
})
export class StartsComponent implements OnInit {
    @Input('score') score: number = 0;
    @Input('showScordNum') showScordNum:boolean = true;
    fullArr=[0,2,4,6,8];
    constructor() { }

    ngOnInit() {
    }

}
