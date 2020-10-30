import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from './movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  public movieList: Movie[];
  public currentPage = 1;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieList();
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.subject.subscribe((data: Movie[]) => {
      this.movieService.getRatingAvarage(data);
      this.movieList = data;
    });
  }

  previewPage(): void {
    if (this.movieService.paramsForSearch._page > 1) {
      this.movieService.paramsForSearch._page--;
    }
    this.movieService.getMovieList();
  }

  nextPage(): void {
    this.movieService.paramsForSearch._page++;
    this.movieService.getMovieList();
  }
}
