import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie/movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  hotMovie=[1,2,3,4,5,6,7,8,9,10];
  constructor( private movieService: MovieService) {
    movieService.getMovieList().then((res) => {
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
