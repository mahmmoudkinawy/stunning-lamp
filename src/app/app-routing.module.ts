import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import{NotfoundComponent}from './notfound/notfound.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'latest-projects',
    loadChildren: () =>
      import('./latest-projects/latest-projects.module').then((m) => m.LatestProjectsModule)

  },
  {
    path: 'servicesDetails',
    loadChildren: () =>
      import('./services-details/services-details.module').then((m) => m.ServicesDetailsModule)

  },
  
  {path: '404', component: NotfoundComponent},
  {path: '**',   pathMatch   : 'full',component: NotfoundComponent}

];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
 
  initialNavigation:'enabled'
};
// useHash:true,
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
