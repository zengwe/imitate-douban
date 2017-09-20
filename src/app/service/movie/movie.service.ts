import { Injectable, Injector } from '@angular/core';
import { RequestService } from '../request/request.service';
import { movieListRes, movieRes, questParam,movieDetailRes } from './movie.struct';
import { errorCode } from '../../common/code';
@Injectable()
export class MovieService {
    constructor(private request: RequestService) {
    }
    getMovieList(param: questParam = { type: 1, movieType: 0, count: 5 }): Promise<any> {
        return this.request.queryServer({ url: '/assets/data/movie.json', method: 'get' }, {}).then((res: movieListRes) => {
            if (res.code === errorCode.OK) {
                return res.data;
            } else {
                return [];
            }
        });
    }
    getMovieDetail(id:number):Promise<any>{
        return this.request.queryServer({url:'/assets/data/movie-detail.json',method:'get'},{id:id}).then((res: movieDetailRes) => {
            if (res.code === errorCode.OK) {
                return res.data;
            } else {
                return {};
            }            
        });
    }
}
