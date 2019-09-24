


// If error occurs, this resolve error method won't redirect user to component

// resolve() {
//    return this.usersListService.getUsers().pipe(
//       catchError((error) => {
//          return empty();
//       })
//    )
// }
import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppResolver implements Resolve<any> {

   constructor(private httpClient: HttpClient) { }

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> { 
      	//console.log('Parametro de entrada:  ' , route.params['nombre']);
		const userId = route.params['id'];
		const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
		//console.log(url)
		//const url = `https://jsonplaceholder.typicode.com/users`;
		return this.httpClient.get(url);      
      	//return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
   }



   
   
}