import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { langGetter } from 'src/app/shared/helpers/helper';
import { Service } from 'src/app/shared/models/service';
import { ServicesService } from 'src/app/shared/services/services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss']
})
export class ServicesDetailsComponent implements OnInit {

  serviceById: Service
  serviceId: any
  arabicMode = false;

  constructor(private servicesService: ServicesService, private route: ActivatedRoute) {
    this.route.params
      .subscribe((params: Params) => {
        this.serviceId = params['id'];
      }
      );


    const currentLang = langGetter();
    if (currentLang == '707') {
      this.arabicMode = true;
    }
    else {
      this.arabicMode = false;
    }
  }

  ngOnInit() {
    this.servicesService.getServiceById(this.serviceId).subscribe((res: any) => {
      this.serviceById = res.data;
    })
  }

  getImgPath(fileName: any): any {
    return `${environment.file_path}${fileName}`;
  }
}
