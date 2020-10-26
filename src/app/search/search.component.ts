import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from '../movie-list/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private API_URL = environment.API_URL
  form: FormGroup;
  constructor(private movieService: MovieService) { };

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(''),
      year: new FormControl(''),
    })
    
  }

  onSubmit() {
    const formData = { ...this.form.value }
    // console.log(this.form)
    // console.log(formData)
    //  console.log(formData.year)
    // let filteredTitle = this.API_URL + `?title=${formData.title}`
    // let filteredYear = this.API_URL + `?year=${formData.year}`
    // console.log(filteredTitle)
    // console.log(filteredYear)

    this.movieService.getFilteredMovieList(formData.year).subscribe(year=>{
      console.log(year)
    })



    
  }

}