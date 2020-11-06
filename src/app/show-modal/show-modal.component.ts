import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-modal',
  templateUrl: './show-modal.component.html',
  styleUrls: ['./show-modal.component.css']
})
export class ShowModalComponent implements OnInit {

  public title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
