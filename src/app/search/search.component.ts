import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from '../movie-list/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  public movieList;
  private currentPage = 1
  constructor(private movieService: MovieService) { };

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(''),
      year: new FormControl(''),
    })

    this.getMovies()
  }

  getMovies() {
    this.movieService.getMovieList().subscribe(data => {
      this.movieList = this.movieService.getRatingAvarage(data)
    });
  }

  onSubmit() {
    // console.log(this.form)
    const formData = { ...this.form.value }
    // console.log(formData.title) 
    // console.log(this.movieList)
    this.movieList.filter(movie => {
      if(movie.title.toLowerCase() === formData.title.toString().toLowerCase())
      console.log( formData.title.toString().toLowerCase())
      // console.log(movie.year === formData.year.toString())
    })

  }

}