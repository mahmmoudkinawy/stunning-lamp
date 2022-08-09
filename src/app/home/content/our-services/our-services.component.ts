import { state, style, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';
import { langGetter } from 'src/app/shared/helpers/helper';
import { Service } from 'src/app/shared/models/service';
import { ServicesService } from 'src/app/shared/services/services.service';
import { environment } from 'src/environments/environment';
declare var $: any;
@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide', style({
        opacity: 0,
      }))
    ])
  ]
})
export class OurServicesComponent implements OnInit {
  state = 'hide';
  allService: Service[];
  env
  arabicMode = false;

  constructor(public el: ElementRef, private serviceServices: ServicesService) {
    this.env = environment;

    const currentLang = langGetter();
    if (currentLang == '707') {
      this.arabicMode = true;
    }
    else {
      this.arabicMode = false;
    }
  }

  ngOnInit() {
    this.serviceServices.getAllServices().subscribe((res: any) => {
      this.allService = res.data;
    })


  }
  getImgPath(fileName: any): any {
    return `${environment.file_path}${fileName}`;
  }

}
