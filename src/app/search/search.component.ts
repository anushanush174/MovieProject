import { IfStmt } from '@angular/compiler';
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
  @Output() onFilteredList: EventEmitter<any> = new EventEmitter()
  // @Output() onTitleFilteredList: EventEmitter<any> = new EventEmitter()

  constructor(private movieService: MovieService) { };

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(''),
      year: new FormControl(''),
    })
  }

  onSubmit() {
    const formData = { ...this.form.value }

    this.movieService.getFilteredList(formData.year, formData.title).subscribe(filteredList => {
      console.log(filteredList)
      this.onFilteredList.emit(filteredList)
    })

    // this.movieService.getFilteredListByTitle(formData.title).subscribe(filteredByTitleList => {
    //   this.onTitleFilteredList.emit(filteredByTitleList)
    // })

    // console.log(filteredByYear)
    // console.log(this.form.value)
    // console.log(this.form)
    // console.log(formData)
    // console.log(formData.year)
    // let filteredTitle = this.API_URL + `?title=${formData.title}`
    // let filteredYear = this.API_URL + `?year=${formData.year}`
    // console.log(filteredTitle)
    // console.log(filteredYear)
  }
}