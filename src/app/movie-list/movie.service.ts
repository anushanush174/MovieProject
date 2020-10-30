import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Movie {
    title: string;
    year: number;
    genres: string;
    actors: string;
    duration: number;
    rating: number;
    storyline: string;
}

@Injectable()
export class MovieService {
  private API_URL = environment.API_URL;
  subject = new Subject<any>();
  paramsForSearch = {
    _page: 1,
    _limit: 10,
    year: '',
    title: '',
  };

  constructor(private http: HttpClient) {}

  getRatingAvarage(list): any {
    list.forEach((movie) => {
      movie.rateingAverage =
        movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length;
    });
    return list;
  }

  getMovieList(): void {
    let url = '?';
    const keys = Object.keys(this.paramsForSearch); // ["_page", "_limit", "year", "title"]
    keys.forEach( keys => { // console.log(key)  _page ...
      if (this.paramsForSearch[keys]) {
        url = url + keys + '=' + this.paramsForSearch[keys] + '&';
      }
    });
    this.http.get(this.API_URL + url).subscribe((movies) => {
      this.subject.next(movies);
    });
  }
}
