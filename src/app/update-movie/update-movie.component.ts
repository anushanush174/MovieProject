import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie-list/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css'],
})
export class UpdateMovieComponent implements OnInit {
  public editMovieForm: FormGroup;
  private id: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newFormGroup();
    this.id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(this.id).subscribe((movie) => {
      this.editMovieForm.setValue({
        title: movie.title,
        year: movie.year,
        actors: movie.actors,
        duration: movie.duration,
        genres: '',
        storyline: movie.storyline,
        // posterUrl: this.editMovieForm.value.posterUrl,
      });
    });
  }

  private newFormGroup(): void {
    this.editMovieForm = new FormGroup({
      title: new FormControl(''),
      year: new FormControl(''),
      actors: new FormControl(''),
      duration: new FormControl(''),
      genres: new FormControl(''),
      storyline: new FormControl(''),
    });
  }

  onEdit(): void {
    this.movieService
      .putEditedMovie(this.id, this.editMovieForm.value)
      .subscribe(() => {
        return this.movieService.getMovieList();
      });
    this.router.navigate(['/']);
  }
}
