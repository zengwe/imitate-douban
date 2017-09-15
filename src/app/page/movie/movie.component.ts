import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie/movie.service';
import { Movie, movieToActor } from '../../service/movie/movie.struct';
@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    hotMovie: Movie[] = [];
    playingMovie: Movie[] = [];
    youLikes: Movie[] = [];
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
        //你可能喜欢的电影
        movieService.getMovieList().then((res) => {
            this.youLikes = res;
        });
    }
    ngOnInit() {
    }
    getActors(data: movieToActor[],type:number):string{
        let actorNameArr:string[]=[];
        for(let actor of data){
            if(actor.role_type === type){
                actorNameArr.push(actor.actor.name);
            }
        }
        return actorNameArr.join(' / ');
    }
}
