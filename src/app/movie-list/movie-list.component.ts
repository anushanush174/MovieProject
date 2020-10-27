import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() public movieList;
 
  private currentPage = 1

  constructor(private movieServise: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.movieServise.getLimitedMovieList(this.currentPage).subscribe(data => {
      this.movieList = this.movieServise.getRatingAvarage(data)
    });
  }

  previewPage() {
    this.currentPage--;
    this.getMovies();
  }

  nextPage() {
    this.currentPage++;
    this.getMovies();
  }

}