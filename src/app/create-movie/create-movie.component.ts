import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-list/movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void { }

  createMovie(): void{
    console.log();
  }
}
