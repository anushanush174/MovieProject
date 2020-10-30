import { Component, Input, OnInit, Output } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movieList;
  public currentPage: number = 1;

  constructor(private movieServise: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
    this.movieServise.getMovieList()
  }

  getMovies() {
    this.movieServise.getLimitedMovieList().subscribe(data => {
      this.movieList = this.movieServise.getRatingAvarage(data)
    });
  }

  previewPage() {
    this.movieServise.paramsForSearch._page--;
    this.getMovies();
  }

  nextPage() {
    this.movieServise.paramsForSearch._page++;
    this.getMovies();
    console.log(this.movieServise.paramsForSearch._page++
    )
  }

}