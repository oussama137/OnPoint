import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element: any): void {
    console.log(element);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
