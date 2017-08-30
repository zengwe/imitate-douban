import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input('borderBottom') borderBottom:boolean = false;
    constructor() { }

    ngOnInit() {
    }
    ngAfterViewInit(){
        console.log(this.borderBottom);
    }
}
