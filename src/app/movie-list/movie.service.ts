import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class MovieService {
    private API_URL = environment.API_URL;

    constructor(private http: HttpClient) { }

    getLimitedMovieList(page) {
        return this.http.get(this.API_URL + `?_page=${page}&_limit=10`)
    }

    getMovieList() {
        return this.http.get(this.API_URL)
    }

    getRatingAvarage(list): any {
        list.forEach(movie => {
            movie.rateingAverage = movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length;
        })
        return list
    }

}