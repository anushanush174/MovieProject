import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
})
export class DeleteMovieComponent implements OnInit {
  @Input() movieId: number;

  constructor(private movieService: MovieService) {}
  ngOnInit(): void {}

  deleteCurrentMovie(): any {
    this.movieService.deleteMovie(this.movieId).subscribe(() => {
      return this.movieService.getMovieList();
    });
  }
}