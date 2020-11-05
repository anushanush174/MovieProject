import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../movie-list/movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  @Input() movieId: any;

  constructor(private movieService: MovieService) { }
  ngOnInit(): void {
  }

  deleteCurrentMovie(){
    this.movieService.deleteMovie(this.movieId);
    this.movieService.getMovieList()
  }
}
