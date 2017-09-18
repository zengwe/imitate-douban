import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input('borderBottom') borderBottom: boolean = false;
    @Input('goBack') goBack: boolean = false;
    @Input('backgroundColor') backgroundColor: string ='#fff';
    constructor() { }

    ngOnInit() {
    }
    historyBack(){
        window.history.go(-1);
    }
    ngAfterViewInit(){
        console.log(this.borderBottom);
    }
}
