import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Movie, MovieService} from '../movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
})
export class CreateMovieComponent implements OnInit {
  public createMovieForm: FormGroup;
  private movieStatus = { inProgress: 'inProgress', approved: 'approved' };
  private userType = JSON.parse(localStorage.getItem('userData'))[0].user_type;
  constructor(
    private movieService: MovieService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.createMovieForm = new FormGroup({
      title: new FormControl(''),
      year: new FormControl(''),
      actors: new FormControl(''),
      duration: new FormControl(''),
      rating: new FormControl(''),
      genres: new FormControl(''),
      description: new FormControl(''),
    });
  }

  onClick(): void {
    if (this.userType === 'user') {
      this.createMovie(this.getFormData(this.movieStatus.inProgress));
    } else {
      this.createMovie(this.getFormData(this.movieStatus.approved));
    }
  }

  private getFormData(status): Movie {
    return { ...this.createMovieForm.value, movie_status: status };
  }

  private createMovie(movieData): void {
    this.movieService.createNewMovie(movieData).subscribe(() => {
      this.movieService.getMovieList();
    });
    this.router.navigate(['/']);
  }

}
