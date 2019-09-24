import { Component, OnInit } from '@angular/core';

 console.log('HomeComponent');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	console.log('HomeComponent - OnInit');
  }

}
