import { Component, OnInit } from '@angular/core';
import {Movie, MovieService} from '../movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-status',
  templateUrl: './movie-status.component.html',
  styleUrls: ['./movie-status.component.css']
})
export class MovieStatusComponent implements OnInit {
  public inProgressList: Movie;
  private  id: string;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.movieService.getInProgressList();
    this.movieService.inProgressSubj.subscribe(movies => {
      this.inProgressList = movies;
    });

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap);
  }

  public reject(id: string | number): void {
    this.movieService.deleteMovie(id).subscribe(() => {
      this.movieService.getInProgressList();
    });
  }

  public approve(id: string | number): void {
    const movieStatus = {movie_status: 'approved'};
    this.movieService.changeMovieStatus(id, movieStatus).subscribe(() => {
      this.getMovieList();
    });
  }

  private getMovieList(): any[]{
    return this.movieService.getInProgressList();
  }
}
