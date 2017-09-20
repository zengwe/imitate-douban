import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Movie, movieToActor } from '../../service/movie/movie.struct';
import { MovieService } from '../../service/movie/movie.service';
@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
    movie: Movie;
    constructor(private route: ActivatedRoute, private movieService: MovieService) { }
    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        this.movieService.getMovieDetail(Number(id)).then((res: Movie) => {
            this.movie = res;
            console.log(res);
        });
    }
    getActor(actorArr: movieToActor[], type: number): string {
        let stringArr: string[] = [];
        for (let actor of actorArr) {
            if (actor.role_type === type) {
                stringArr.push(actor.actor.name);
            }
        }
        return stringArr.join(' / ');
    }
}
