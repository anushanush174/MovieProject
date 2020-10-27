import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class MovieService {
    private API_URL = environment.API_URL;
    page = 1
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

    getFilteredList(year, title) {
        if (year && title) {
            return this.http.get(this.API_URL + `?year=${year}&title=${title}`)
        }else if(year && title==false){
            return this.http.get(this.API_URL + `?year=${year}`)
        }else if(year==false && title){
            return this.http.get(this.API_URL + `?title=${title}`)
        }else{
            return this.http.get(this.API_URL + `?_page=1&_limit=10`)
        }

    }

    // getFilteredListByTitle(data) {
    //     if (data) {
    //         return this.http.get(this.API_URL + `?title=${data}`)
    //     }
    // }
}