import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../service/movie/movie.struct';
@Component({
    selector: 'app-item-block',
    templateUrl: './item-block.component.html',
    styleUrls: ['./item-block.component.scss']
})
export class ItemBlockComponent implements OnInit {
    @Input('cover') cover: string = '';
    @Input('coverName') coverName: string = ''; 
    constructor() { }

    ngOnInit() {
    }
    ngAfterViewInit() {
        // console.log(this.movie);
    }
}
