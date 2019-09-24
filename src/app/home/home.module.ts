import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


console.log('HomeModule');   

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild( [{path: '',	component: HomeComponent }])
  ]
})
export class HomeModule  {

 }
