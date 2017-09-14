import { Injectable, Injector, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { URLSearchParams, Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class RequestService {
    private http: Http;
    constructor( private injector: Injector ) {
        this.http = injector.get(Http);
    }
    handleError(error: Response | any): boolean {
        console.error('baseService received request errorr');
        console.log(error);
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        Observable.throw(errMsg);
        return false;
    }
    createRequstParam(data: any, jsonp = false): any {
        const params = new URLSearchParams();
        for (let key in data) {
            params.set(key, data[key])
        }
        // if (jsonp == true) {
        //     params.set('callback', 'JSONP_CALLBACK');
        // }
        return params;
    }
    createHeaders() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    }
    checkResponeCode(res: Response) {
        const serverResponse = res.json() as { code: number, desc: string, data: any };

        return serverResponse;
    }
    queryServer(query: { url: string, method: string }, param: any): Promise<any> {
        const form = this.createRequstParam(param);
        switch (query.method) {
            // case 'post':
            //     return this.http.post(query.url, form, { headers: this.createHeaders() }).toPromise()
            //     .then(this.checkResponeCode.bind(this)).catch(this.handleError);
            case 'get':
            default:
                return this.http.get(query.url, { search: form }).toPromise()
                .then(this.checkResponeCode.bind(this)).catch(this.handleError);
        }
    }
}
