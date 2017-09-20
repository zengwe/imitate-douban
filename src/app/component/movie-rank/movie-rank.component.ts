import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MovieService } from '../../service/movie/movie.service';
import { Movie } from '../../service/movie/movie.struct';
declare let Swiper: any;
@Component({
    selector: 'app-movie-rank',
    templateUrl: './movie-rank.component.html',
    styleUrls: ['./movie-rank.component.scss']
})
export class MovieRankComponent implements OnInit, AfterViewInit, OnDestroy {
    titleNameArr = ['豆瓣Top250', '本周口碑榜', '新片榜', '票房榜'];
    activeIndex = 0;
    top250Movie: Movie[] = [];
    weekMovieList: Movie[] = [];
    newMovieList: Movie[] = [];
    topSailMovieList: Movie[] = [];
    private swiperInstance: any;
    constructor(private movieService: MovieService) {
        this.swiperInstance = null;
        movieService.getMovieList().then((res: Movie[]) => {
            this.top250Movie = res;
        });
        movieService.getMovieList().then((res: Movie[]) => {
            this.weekMovieList = res;
        });
        movieService.getMovieList().then((res: Movie[]) => {
            this.newMovieList = res;
        });
        movieService.getMovieList().then((res: Movie[]) => {
            this.topSailMovieList = res;
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.swiperInstance = new Swiper('#movie-rank-component-container-swiper', {
            pagination: '.swiper-pagination',
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 20,
            onSlideChangeEnd: (data) => {
                this.activeIndex = data.activeIndex;
            }
        });
    }
    ngOnDestroy() {
        this.swiperInstance.destroy();
    }
}
