import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private httpClient: HttpClient) { }


   public getNews(){
   	
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}