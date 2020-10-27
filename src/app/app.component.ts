import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public filteredList: any

  getFilteredList(list){
    this.filteredList = list
  }

  // getFilteredByTitleList(list){
  //   this.filteredList = list
  // }
 }