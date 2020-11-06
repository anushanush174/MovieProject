import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from '../movie-list/movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  public createForm: FormGroup;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      title: new FormControl(''),
      year: new FormControl(''),
      actors: new FormControl(''),
      duration: new FormControl(''),
      raiting: new FormControl(''),
      genres: new FormControl(''),
      description: new FormControl(''),
    })
  }

  createMovie(): void {
    console.log();
  }
}
