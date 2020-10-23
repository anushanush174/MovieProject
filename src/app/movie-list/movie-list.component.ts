import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  url = "http://localhost:3000/movies";
  movies;
  roundedRaiting;
  raitings;
  constructor(private http: HttpClient) {
    console.log(this.movies);
  }

  ngOnInit(): void {
    this.getRoundedRaiting()
    this.getMOvieList();
    
  }

  getMOvieList() {
    this.http.get(this.url).subscribe(moviesArray => this.movies = moviesArray);

  }

  getRoundedRaiting() {
    this.http.get(this.url).subscribe(moviesArray => {
      this.movies = moviesArray;
      console.log(moviesArray );
    })

  }
}
