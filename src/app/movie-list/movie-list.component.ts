import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
import { Movie, MovieService } from './movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  public movieList: Movie[];
  public currentPage = 1;
  isLogged = false;

  constructor(
    private movieService: MovieService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movieService.getMovieList();
    this.getMovies();
    const loggedIn = localStorage.getItem('userData');
    if (loggedIn) {
      this.isLogged = true;
      this.authService.login();
    } else {
      this.onLogout();
    }
  }

  authLogout(): any {
    return this.authService.logout();
  }

  onLogout(): any {
    this.isLogged = false;
    localStorage.removeItem('userData');
    this.authLogout();
    this.router.navigate(['/']);
  }

  getMovies(): void {
    this.movieService.subject.subscribe((data: Movie[]) => {
      this.movieService.getRatingAvarage(data);
      this.movieList = data;
    });
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

  authenticated(): Promise<boolean> | boolean {
    return this.authService.isAuthenticated();
  }
}
