import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-res-one',
  templateUrl: './res-one.component.html',
  styleUrls: ['./res-one.component.css']
})
export class ResOneComponent implements OnInit {
  Users: any = [];

  constructor(
    private appService: AppService,
    private actRoute: ActivatedRoute
  ) { }


  ngOnInit() {
    // Can access route resolver data with ActivatedRoute route service
    this.actRoute.data.pipe(map(data => data.resolv)).subscribe((res) => {
    	console.log(res);
    	this.Users[0] = res;
	});

    /*this.actRoute.data.subscribe(data => {
      console.log('Check route resolver data')
      console.log(data);
      console.log(data.resolv);
      this.Users = data.resolv;
    })*/


    /*this.appService.getNews().subscribe((data: {}) => {
      console.log(data);
      this.Users = data;
    })*/
  }
  
}
