import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../movie-list/movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  public createMovieForm: FormGroup;
  constructor(private movieService: MovieService, private router: Router ) { }

  ngOnInit(): void {
    this.createMovieForm = new FormGroup({
      title: new FormControl(''),
      year: new FormControl(''),
      actors: new FormControl(''),
      duration: new FormControl(''),
      raiting: new FormControl(''),
      genres: new FormControl(''),
      description: new FormControl(''),
    });
  }

  onClick(): void {
    const formData = { ...this.createMovieForm.value };
    console.log(formData);
    this.movieService.createNewMovie(formData).subscribe(() => {
      this.movieService.getMovieList();
    });
    this.router.navigate(['/'])
  }

}
