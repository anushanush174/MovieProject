import { Component, OnInit } from '@angular/core';
import {Movie, MovieService} from '../movie.service';

@Component({
  selector: 'app-movie-status',
  templateUrl: './movie-status.component.html',
  styleUrls: ['./movie-status.component.css']
})
export class MovieStatusComponent implements OnInit {
  inProgressList: Movie;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getInProgressList();
    this.movieService.inProgressSubj.subscribe(movies => {
      this.inProgressList = movies;
      console.log(movies);
    });
  }
}
