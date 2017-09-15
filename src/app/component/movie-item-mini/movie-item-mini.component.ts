import { Component, OnInit,Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Movie } from '../../service/movie/movie.struct';
@Component({
  selector: 'app-movie-item-mini',
  templateUrl: './movie-item-mini.component.html',
  styleUrls: ['./movie-item-mini.component.scss']
})
export class MovieItemMiniComponent implements OnInit {
  @Input('movie') movie:Movie;
  constructor( private _sanitizer: DomSanitizer ) { }
  ngOnInit() {
  }
  getBackground(image) {
      return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient( rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }
  ngAfterViewInit(){
    console.log(this.movie);
  }
}
