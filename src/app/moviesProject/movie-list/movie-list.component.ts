import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service';
import { Movie, MovieService } from '../movie.service';
import { User } from '../../auth/auth.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  public movieList: Movie[];
  public currentPage = 1;
  public userData: User;
  isLogged = false;

  constructor(
    private movieService: MovieService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('userData') === null) {
      this.userData = null;
    }else {
      this.userData = JSON.parse(localStorage.getItem('userData'))[0];
    }
    this.movieService.getMovieList();
    this.getMovies();
    if (this.userData) {
      this.isLogged = true;
      this.authService.login();
    } else {
      this.onLogout();
      this.isLogged = false;
      this.movieService.getMovieList();
    }
  }

  public onLogout(): any {
    this.isLogged = false;
    localStorage.removeItem('userData');
    this.authLogout();
    this.router.navigate(['/']);
  }

  getMovies(): void {
    this.movieService.subject.subscribe((data: Movie[]) => {
      console.log(data);
      // data.forEach(movie => {
      //   console.log(movie);
        // if (movie.movie_status === 'approved'){
      this.movieService.getRatingAverage(data);
      this.movieList = data;
        // }
      // });
    });
  }

  public previewPage(): void {
    if (this.movieService.paramsForSearch._page > 1) {
      this.movieService.paramsForSearch._page--;
    }
    this.movieService.getMovieList();
  }

  public nextPage(): void {
    this.movieService.paramsForSearch._page++;
    this.movieService.getMovieList();
  }

  private authLogout(): any {
    return this.authService.logout();
  }
}
