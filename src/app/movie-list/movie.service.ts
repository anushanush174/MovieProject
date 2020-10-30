import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MovieService {
    private API_URL = environment.API_URL;
    subject = new Subject<any>()
    paramsForSearch = {
        _page: 1,
        _limit: 10,
        year: '',
        title: '',
    }

    constructor(private http: HttpClient) { }

    getLimitedMovieList() {
        return this.http.get(this.API_URL)
    }

    getRatingAvarage(list): any {
        list.forEach(movie => {
            movie.rateingAverage = movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length;
        })
        return list;
    }

    getMovieList() {
        let url: string = '?'
        let key = Object.keys(this.paramsForSearch) // ["_page", "_limit", "year", "title"]
        key.forEach(key => {
            // console.log(key)
            if (this.paramsForSearch[key]) {
                url = url + key + '=' + this.paramsForSearch[key] + '&'
            }
        });
        this.http.get(this.API_URL + url).subscribe(movies => {
            this.subject.next(movies)
        });
    };

    // getFilteredList() {
    //     return this.http.get(this.API_URL)
    // }
}