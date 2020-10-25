import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movieList;
  private currentPage = 1

  constructor(private movieServise: MovieService) { }

  ngOnInit(): void {
    this.movieServise.getMovieList(this.currentPage).subscribe(data => {
      this.movieList = this.movieServise.getRatingAvarage(data)
    })

    this.movieServise.nextPage(this.currentPage)
    this.movieServise.previewPage(this.currentPage)
  }



}