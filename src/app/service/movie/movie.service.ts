import { Injectable, Injector } from '@angular/core';
import { RequestService } from '../request/request.service';
import { movieListRes, movieRes, questParam } from './movie.struct';
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
}
