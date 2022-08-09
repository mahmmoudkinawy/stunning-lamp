import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './content/about/about.component';
import { OurServicesComponent } from './content/our-services/our-services.component';
import { OurPartnersComponent } from './content/our-partners/our-partners.component';
import { LatestProjectsComponent } from './content/latest-projects/latest-projects.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { FilterComponent } from './content/filter/filter.component';
import { MatSelectModule } from '@angular/material/select';
import { ContactUsComponent } from './content/contact-us/contact-us.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TeamComponent } from './content/team/team.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [LayoutComponent, ContentComponent, HeaderComponent, FooterComponent, AboutComponent, OurServicesComponent, OurPartnersComponent, LatestProjectsComponent, ProjectsComponent, FilterComponent, ContactUsComponent, TeamComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSelectModule,
    ModalModule.forRoot(),
    NgbModule,
    SharedModule,
    SlickCarouselModule,
    CarouselModule
  ],
  exports: [
    ModalModule,
  ]
})
export class HomeModule { }
