import { Properties } from './../../../shared/models/properties';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { langGetter } from 'src/app/shared/helpers/helper';
import { PropertiesService } from 'src/app/shared/services/properties.service';
import { environment } from 'src/environments/environment';

declare var $: any;
@Component({
  selector: 'app-latest-projects',
  templateUrl: './latest-projects.component.html',
  styleUrls: ['./latest-projects.component.scss']
})
export class LatestProjectsComponent implements OnInit {
  modalRef!: BsModalRef;
  properties: Properties[]
  propertyId: Properties;


  MinPrices?: any
  BedRooms?: any = ''
  MaxPrices?: any
  category?: any = ''
  area?: any = ''
  beadroom?: any = ''
  bathroom?: any = ''
  title?: any = ''
  typeid?: any = ''
  tag?: any = ''

  arabicMode = false;
  constructor(private modalService: BsModalService, private Router: ActivatedRoute,
    private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.getAllProperties();

    const currentLang = langGetter();
    if (currentLang == '707') {
      this.arabicMode = true;

    }
    else {
      this.arabicMode = false;

    }
  }

  getAllProperties() {

    this.MinPrices = 0;
    this.MaxPrices = 0;
    // this.propertiesService.getAllProperties().subscribe((res: any) => {
    //   this.properties = res.data;
    // })
    // Bedroom ?: any, Bathroom ?: any, Minprice ?: any, Maxprice ?: any, TypeId ?: any, Category ?: any, Area ?: any
    // this.propertiesService.getRelatedProperties(this.beadroom, this.bathroom, this.MinPrices, this.MaxPrices, this.typeid, this.category, this.area
    // ).subscribe((res: any) => {
    //   this.properties = res.data;
    // })

    this.propertiesService.getLatestProperties().subscribe((res: any) => {
      this.properties = res.data;
    })
  }


  closeSubDialog() {
    this.modalRef.hide();
  }
  seeMore() {
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>, propId: any) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-xl',
      backdrop: 'static',
    });
    this.propertiesService.getPropertiesById(propId).subscribe((res: any) => {
      this.propertyId = res.data;
    });
  }

  getImgPath(fileName: any): any {
    return `${environment.file_path}${fileName}`;
  }
}
