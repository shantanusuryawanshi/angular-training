import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  slides = [
    {img: "http://placehold.it/350x150/000000", title: "Test"},
    {img: "http://placehold.it/350x150/111111", title: "Test"},
    {img: "http://placehold.it/350x150/333333", title: "Test"},
    {img: "http://placehold.it/350x150/666666", title: "Test"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
