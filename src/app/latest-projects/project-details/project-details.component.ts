import { Properties, PropertyType } from './../../shared/models/properties';
import { DatePipe } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { KeenSliderInstance, KeenSliderPlugin } from 'keen-slider';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Furnishe, FurnisheMapping } from 'src/app/shared/models/enum';
import { CallTrackService } from 'src/app/shared/services/callTrack.service';
import { PropertiesService } from 'src/app/shared/services/properties.service';
import { environment } from 'src/environments/environment';
import KeenSlider from 'keen-slider';
import { filter } from 'rxjs/operators';
import { langGetter } from 'src/app/shared/helpers/helper';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement>;
  @ViewChild('thumbnailRef') thumbnailRef: ElementRef<HTMLElement>;
  modalRef!: BsModalRef;
  slider: KeenSliderInstance = null;
  thumbnailSlider: KeenSliderInstance = null;
  propertyID?: any;
  property: Properties;
  allProperties: Properties[];
  relatedProperties: Properties[];
  typeName: PropertyType;

  MinPrices?: any;
  BedRooms?: any = '';
  MaxPrices?: any;
  category?: any = '';
  area?: any = '';
  beadroom?: any = '';
  bathroom?: any = '';
  title?: any = '';
  typeid?: any = '';
  mapUrl;
  images: any[] = [];
  currentDate = new Date();
  contactForm: FormGroup;
  public href: any ;
    postUrl=encodeURI(document.location.href); // This Will Return This project URL
    imgUrl: string
   
  public furnisheMapping = FurnisheMapping;
  public furnished = Object.values(Furnishe).filter(
    (value) => typeof value === 'number'
  );
  slideConfig = {
    focusOnSelect: false,
    centerMode: true,
    infinite: false,
    freeDrag: true,
    mouseDrag: true,
    touchDrag: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          focusOnSelect: false,
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

  arabicMode = false;
   

  env:any;



  constructor(
    config: NgbCarouselConfig,
    private router: ActivatedRoute,
    private propertiesService: PropertiesService,
    private modalService: BsModalService,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private callTrackService: CallTrackService,
    public datepipe: DatePipe,
    private route: Router,private metaTagService: Meta , private metaTitle:Title 
  ) {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.env = environment
    this.href = this.router.url;


    this.metaTagService.removeTag(`property='og:url'`)
    this.metaTagService.removeTag(`property='og:image'`)
    this.metaTagService.removeTag(`property='og:description'`)
    this.metaTagService.removeTag(`property='og:title'`)
    
    config.interval = 5000;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;

    const currentLang = langGetter();
    if (currentLang == '707') {
      this.arabicMode = true;

    }
    else {
      this.arabicMode = false;

    }
    this.router.params.subscribe((res) => {
      this.propertyID = res['id'];
    });
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;

  }

  ngOnInit() {
    this.propertiesService
      .getPropertiesById(this.propertyID)
      .subscribe((res: any) => {
        this.property = res.data;
        for (let img of this.property.images) {
          this.images.push(img);
        }
        this.mapUrl = this.getSafeUrl(this.property.location);

        // this.metaTitle.setTitle(this.property.title)
             this.imgUrl=this.property.coverImage;    
        this.metaTagService.updateTag({ property: "og:url", content: this.href }, `property='og:url'`)
        this.metaTagService.updateTag({ property: "og:image", Content: this.imgUrl }, `property='og:image'`)
        this.metaTagService.updateTag({ name: "description", content: this.property.description }, `name='description'`)
        this.metaTagService.updateTag({ property: "og:title", content: this.property.title }, `property='og:title'`)
      });
    this.getPropById();
    // this.getAllProperties();

    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      date: [],
      agentId: [],
      propertyId: [],
    });


  



  }

  callAgent() {
    let currentDate = this.datepipe.transform(
      this.currentDate,
      'MM/dd/yyyy h:mm:ss'
    );
    this.contactForm.get('date').setValue(currentDate);
    this.callTrackService
      .createCallTrack(this.contactForm.value)
      .subscribe((res: any) => {
        if (res.isSucceeded) {
          this.contactForm.reset();
        }
      });
  }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
price:any;
imagesOfProperty:any;
  getPropById(id?: any) {
    this.propertiesService
      .getPropertiesById(this.propertyID)
      .subscribe((res: any) => {
        this.property = res.data;
        this.imagesOfProperty= this.property.images;
        this.mapUrl = this.getSafeUrl(this.property.location);

        // this.metaTitle.setTitle(this.property.title)
             this.imgUrl=this.property.coverImage;    
        this.metaTagService.updateTag({ property:"og:url"   , content: this.href }, `property='og:url'`)
        this.metaTagService.updateTag({ property: "og:image", Content: this.imgUrl }, `property='og:image'`)
        this.metaTagService.updateTag({ name: "description", content: this.property.description }, `name='description'`)
        this.metaTagService.updateTag({ name: "og:description", content: this.property.description }, `name='og:description'`)
        this.metaTagService.updateTag({ property: "og:title", content: this.property.title }, `property='og:title'`)

          //  this.updateMeta(this.property.title, this.property.description);
        // for(let i of this.property.pricesList){
        // }
          // if(this.property.amount)
          // {
          //   if (this.property.amount || this.property.amount_1 || this.property.amount_2) {
          //     this.MinPrices = 0;
    
          //     if (this.property.amount >= this.property.amount_1 && this.property.amount >= this.property.amount_2) {
          //       this.MaxPrices = this.property.amount;
          //       // console.log('max price 1', this.MaxPrices)
          //     }
          //     else if (this.property.amount_1 >= this.property.amount && this.property.amount_1 >= this.property.amount_2) {
          //       this.MaxPrices = this.property.amount_1;
          //       // console.log('max price 2', this.MaxPrices)
          //     }
          //     else if (this.property.amount_2 >= this.property.amount && this.property.amount_2 >= this.property.amount_1) {
          //       this.MaxPrices = this.property.amount_2;
          //       // console.log('max price 3', this.MaxPrices)
          //     }
          //   }
          // }else{
          //   this.MinPrices=0;
          //   this.MaxPrices=0;
          // }
    
          if (this.property.amount || this.property.amount_1 || this.property.amount_2) {
            this.MinPrices = 0;
  
            if (this.property.amount >= this.property.amount_1 && this.property.amount >= this.property.amount_2) {
              this.MaxPrices = this.property.amount;
              // console.log('max price 1', this.MaxPrices)
            }
            else if (this.property.amount_1 >= this.property.amount && this.property.amount_1 >= this.property.amount_2) {
              this.MaxPrices = this.property.amount_1;
              // console.log('max price 2', this.MaxPrices)
            }
            else if (this.property.amount_2 >= this.property.amount && this.property.amount_2 >= this.property.amount_1) {
              this.MaxPrices = this.property.amount_2;
              // console.log('max price 3', this.MaxPrices)
            }
          }
        else{
          this.MinPrices=0;
          this.MaxPrices=0;
        }
          
        
       


    
        // Bedroom?: any, Bathroom?: any, Minprice?: any, Maxprice?: any, TypeId?: any, Category?: any, Area?: any
        this.propertiesService
          .getRelatedProperties(
            this.property.bedrooms,
            this.property.bathrooms,
            this.MinPrices,
            this.MaxPrices,
            this.property.type.id,
            this.property.category,
            this.property.areaId,
          )
          .subscribe((res: any) => {
            this.relatedProperties = res.data;
          });
      });
  }

  // getAllProperties() {
  //   this.MinPrices = 0;
  //   this.MaxPrices = 0;
  //   this.propertiesService
  //     .getAllPropertiesWithSearch(
  //       this.beadroom,
  //       this.MinPrices,
  //       this.MaxPrices,
  //       this.typeid,
  //       this.title,
  //       this.area
  //     )
  //     .subscribe((res: any) => {
  //       this.allProperties = res.data;
  //     });
  // }

  getImageName(fileName: any): any {
    return `${this.env.file_path}${fileName}`;
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
    this.getPropById(propId);
  }


  // ngOnDestroy() {
  //   if (this.slider) { this.slider.destroy(); }
  //   if (this.thumbnailSlider) { this.thumbnailSlider.destroy(); }
  // }
  
  updateMeta(TitleMeta?:any,
    desMeta?:any){
      this.metaTitle.setTitle(TitleMeta);
      this.metaTagService.updateTag(
        { name: `description`, content: `${desMeta}` }
      )

  }

  ngOnDestroy(): void {

    this.metaTagService.removeTag(`property='og:url'`)
    this.metaTagService.removeTag(`property='og:image'`)
    this.metaTagService.removeTag(`name='description'`)
    this.metaTagService.removeTag(`property='og:title'`)
  
    // Restore The Title When Navigate Away
    this.metaTitle.setTitle('EstateVille - Real Estate')
    this.metaTagService.updateTag({ property: 'og:url', content: 'https://estatevilleeg.com/#/home' }, `property='og:url'`)
    this.metaTagService.updateTag({ property: 'og:image', content: 'https://i.ibb.co/SNZPjhj/Estate-Ville-Vertical-Logo-Blue.png' }, `property='og:image'`)
    this.metaTagService.updateTag({ name: 'description', content: 'estateville is Finest Property Advice Devoted to well-versed management and teamwork , we believe that initiative is the way to implement our vision into reality.' }, `name='description'`)
    this.metaTagService.updateTag({ property: 'og:title', content: "Estateville" }, `property='og:title'`)
  
  }


}
