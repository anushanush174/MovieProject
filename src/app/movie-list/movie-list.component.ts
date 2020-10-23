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
  raiting;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRoundedRaiting()
    // this.getMOvieList();
  }

  // getMOvieList() {
  //   this.http.get(this.url).subscribe(moviesArray => this.movies = moviesArray);
  // }

  getRoundedRaiting() {
    this.http.get(this.url).subscribe(moviesArray => {
      this.movies = moviesArray;
      for (let i in moviesArray) {
        this.raiting = moviesArray[i].ratings.reduce((a, b) => a + b, 0)
        this.roundedRaiting = this.raiting / moviesArray[i].ratings.length
        moviesArray[i].currentRaiting = this.roundedRaiting
      }
    })
  }
}
