import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie, MovieService } from '../movie-list/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css'],
})
export class UpdateMovieComponent implements OnInit {
  private routeSub: Subscription;
  public editMovieForm: FormGroup;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.editMovieForm = new FormGroup({
      title: new FormControl(''),
      year: new FormControl(''),
      actors: new FormControl(''),
      duration: new FormControl(''),
      genres: new FormControl(''),
      description: new FormControl(''),
    });

    this.editMovieForm.setValue({
      title: 'anush',
      year: '1996',
      actors: 'melkonyan',
      duration: '24 tari',
      genres: '',
      description: 'My Movie Description',
    });

    this.routeSub = this.route.params.subscribe((params) => {
      const id = params.id;
      this.movieService.subject.subscribe((data: Movie[]) => {
        this.movieService.getRatingAvarage(data);
        data.map((currentMovie) => {
          console.log('currentMovie.id', currentMovie.id);
        });
      });
    });

  }

  onEdit(): void {}

}
