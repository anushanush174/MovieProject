import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from '../movie-list/movie.service';;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public form: FormGroup;
  @Output() filteredYearsList: EventEmitter<any> = new EventEmitter()


  constructor(private movieService: MovieService) { };

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(''),
      year: new FormControl(''),
    })
  }

  onSubmit() {
    const formData = { ...this.form.value }

    this.movieService.getFilteredMovieList(formData.year).subscribe(filteredByYear => {
      console.log(filteredByYear)
      this.filteredYearsList.emit(filteredByYear)
    })



    // console.log(this.form)
    // console.log(formData)
    //  console.log(formData.year)
    // let filteredTitle = this.API_URL + `?title=${formData.title}`
    // let filteredYear = this.API_URL + `?year=${formData.year}`
    // console.log(filteredTitle)
    // console.log(filteredYear)
  }
}