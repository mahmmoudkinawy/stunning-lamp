import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/shared/models/partner';
import { PartnerService } from 'src/app/shared/services/partner.service';
import { environment } from 'src/environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.scss']
})
export class OurPartnersComponent implements OnInit {
  customOptions: OwlOptions = {
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    // nav:true,
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 4,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      }
    }
  }
  allPartners: Partner[]
  env
  slideConfigPartners = {
    focusOnSelect: false,
    centerMode: true,
    infinite: true,
    freeDrag: true,
    mouseDrag: true,
    touchDrag: true,
    variableWidth: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          focusOnSelect: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          focusOnSelect: true,
          arrows: true,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          focusOnSelect: false,
          arrows: true,

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: false,
        },
      },
    ],
  };
  constructor(private partnerServices: PartnerService) {
    this.env = environment;
  }

  ngOnInit() {
    this.partnerServices.getAllPartners().subscribe((res: any) => {
      this.allPartners = res.data;
    })
  }
  getImgPath(fileName: any): any {
    return `${environment.file_path}${fileName}`;
  }

}
