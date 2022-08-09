import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesDetailsRoutingModule } from './services-details-routing.module';
import { ServicesDetailsComponent } from './services-details/services-details.component';


@NgModule({
  declarations: [ServicesDetailsComponent],
  imports: [
    CommonModule,
    ServicesDetailsRoutingModule
  ]
})
export class ServicesDetailsModule { }
