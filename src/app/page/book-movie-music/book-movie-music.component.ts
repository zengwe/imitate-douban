import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-book-movie-music',
    templateUrl: './book-movie-music.component.html',
    styleUrls: ['./book-movie-music.component.scss']
})
export class BookMovieMusicComponent{
    @ViewChild('father') father: ElementRef;
    activeIndex = 0;
    liWidth = 0;
    constructor() { }
    ngAfterContentChecked() {
        this.changeLinePosition();
    }
    changeLinePosition() {
        let allLi = this.father.nativeElement.getElementsByTagName('li');
        for (let i = 0; i < allLi.length; i++) {
            console.log(allLi[i].className);
            if (allLi[i].className == 'active') {
                this.activeIndex = i * allLi[i].clientWidth;
                break;
            }
        }
    }
}
