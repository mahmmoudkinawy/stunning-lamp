import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../home/layout/layout.component';
import { ContentComponent } from './content/content.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'all',
        component: ContentComponent,
      },
      {
        path: 'all-projects/:Bedroom/:Bathroom/:Minprice/:Maxprice/:TypeId/:Title/:Category/:categoryType/:tag/:area',
        component: ContentComponent,
      },
      {
        path: 'all-projects',
        component: ContentComponent,
      },
      {
        path: 'all-properties/:CategoryId',
        component: ContentComponent,
      },
      {
        path: 'project-details/:id',
        component: ProjectDetailsComponent,
      },
      {
        path: 'all-properties/:NAC',
        component: ContentComponent,
      }
    ],

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestProjectsRoutingModule { }
