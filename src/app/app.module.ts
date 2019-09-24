import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { ItemComponent } from './lista/item/item.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResOneComponent } from './res-one/res-one.component';
import { AppResolver } from './app.resolver';
//import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

const rutas:Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)},
  /*{ path: '**', loadChildren: () => import('./not-found/not-found.module').then(mod => mod.NotFoundModule)}*/
  /*{ path: 'hh', component: ResOneComponent, resolve: { cres: AppService} },*/
{
  path: 'hh/:id',
  component: ResOneComponent,
  resolve: {  resolv: AppResolver }
},
  { path: '**', component: NotFoundComponent }

  /*{ path: '**', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)}*/
];


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ItemComponent,
    NotFoundComponent,
    ResOneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
  ],
  providers: [AppResolver],
  bootstrap: [AppComponent]
})
export class AppModule {

/*constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }*/

 }

