import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestProjectsRoutingModule } from './latest-projects-routing.module';
import { ContentComponent } from './content/content.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator'
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [ContentComponent, ProjectDetailsComponent],
  imports: [
    CommonModule,
    LatestProjectsRoutingModule,
    NgbModule,
    SlickCarouselModule,
    ModalModule.forRoot(),
    SharedModule,
    MatPaginatorModule,
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
    
  ]
})
export class LatestProjectsModule { }
