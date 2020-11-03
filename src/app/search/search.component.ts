import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { MovieService } from '../movie-list/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public form: FormGroup;
  subject = new Subject<any>();
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      year: new FormControl(''),
      genres: new FormControl(''),
    });
  }

  onSubmit(): void {
    const formData = { ...this.form.value };
    const year = formData.year;
    const title = formData.title;
    const genres = formData.genres;
    this.movieService.paramsForSearch.year = year;
    this.movieService.paramsForSearch.title = this.toTitleCase(title);
    this.movieService.paramsForSearch.genres_like = genres;
    this.movieService.getMovieList();
    console.log(this.toTitleCase(title));
  }

  toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
}
