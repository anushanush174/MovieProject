import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie, MovieService } from './movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  public movieList: Movie[];
  public currentPage = 1;
  editMovieForm;

  constructor(
    private movieService: MovieService,
    ) {}

  ngOnInit(): void {
    this.editMovieForm = new FormGroup( {
      title: new FormControl(''),
      year: new FormControl(''),
      actors: new FormControl(''),
      duration: new FormControl(''),
      // genres: new FormControl(''),
      // storyline: new FormControl(''),
    });
    this.movieService.getMovieList();
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.subject.subscribe((data: Movie[]) => {
      this.movieService.getRatingAvarage(data);
      this.movieList = data;
    });
  }

  onClickEditButton(currentMovie): void{
    // const formData = { ...this.editMovieForm.value };
    this.editMovieForm.setValue({
      title: currentMovie.title.toString() ,
      year: currentMovie.year,
      actors: currentMovie.actors,
      duration: currentMovie.duration,
      // genres: currentMovie.genres,
      // storyline: currentMovie.description,
    });
    console.log(currentMovie);
  }

  previewPage(): void {
    if (this.movieService.paramsForSearch._page > 1) {
      this.movieService.paramsForSearch._page--;
    }
    this.movieService.getMovieList();
  }

  nextPage(): void {
    this.movieService.paramsForSearch._page++;
    this.movieService.getMovieList();
  }

}
