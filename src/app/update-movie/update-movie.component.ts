import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from '../movie-list/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  public editMovieForm: FormGroup;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.editMovieForm = new FormGroup( {
      title: new FormControl(''),
      year: new FormControl(''),
      actors: new FormControl(''),
      duration: new FormControl(''),
      raiting: new FormControl(''),
      genres: new FormControl(''),
      description: new FormControl(''),
    });
  }

  onEdit(): void {
    const formData = { ...this.editMovieForm.value };

    this.movieService.getMovieList();
  }

}
