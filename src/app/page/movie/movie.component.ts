import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie/movie.service';
import { Movie } from '../../service/movie/movie.struct';
@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    hotMovie: Movie[] = [];
    playingMovie: Movie[] = [];
    constructor(private movieService: MovieService) {
        //获取影院热映
        movieService.getMovieList().then((res) => {
            console.log(res);
            this.hotMovie = res;
        });
        //获取即将上映
        movieService.getMovieList().then((res) => {
            this.playingMovie = res;
        });
    }

    ngOnInit() {
    }
}
