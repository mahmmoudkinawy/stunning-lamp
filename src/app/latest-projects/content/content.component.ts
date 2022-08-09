import { Properties, PropertyType } from './../../shared/models/properties';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { langGetter } from 'src/app/shared/helpers/helper';
import { Categories } from 'src/app/shared/models/categories';
import { CategoryType, CategoryTypeMapping } from 'src/app/shared/models/enum';
import { CategoriesService } from 'src/app/shared/services/category.service';
import { PropertiesService } from 'src/app/shared/services/properties.service';
import { environment } from 'src/environments/environment';
import { PageEvent } from '@angular/material/paginator'
import { ToastrService } from 'ngx-toastr';
import { AreaService } from 'src/app/shared/services/area.service';
import { Area } from 'src/app/shared/models/area';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  MinPrices?: any = 0;
  MaxPrices?: any = 0;
  CategorySelected?: any
  area?: any = ''
  beadroom?: any = ''
  bathroom?: any = ''
  title?: any = ''
  allType: PropertyType[]
  categories: Categories[]
  typeid?: any = ''
  propByID: Properties;
  categoryType?: any = ''


  
  beds = [1, 2, 3, 4, 5, 6, 7];
  arabicMode = false;

  typeSelected = false;

  public categoryTypeMapping = CategoryTypeMapping;
  public categoryTypes = Object.values(CategoryType).filter(
    (value) => typeof value === 'number'
  );


  noDataFound = false;
  totalRecords = 0
  // pageEvent: PageEvent;
  PageSize?: any = 12;//pageSize
  PageNumber?: any = 1;//pageNumber
  // length = 100;
  pageSizeOptions: number[] = [8, 12, 16, 20, 24, 28, 32, 36, 40];

  areas: Area[];
  form: FormGroup;
  tag?: any = ''

  skipCount?: any = 12;
  // /:Bedroom/: Bathroom /: Minprice /: Maxprice /: TypeId /: Title /: Category
  constructor(private PropertiesService: PropertiesService, private router: Router, private Router: ActivatedRoute,
    private categoryService: CategoriesService, private toastr: ToastrService,
    private areaService: AreaService, private fb: FormBuilder) {

    Router.params.subscribe((res) => {

      if (res['Category']) {
        this.CategorySelected = res['Category']
      }
      // if (this.CategorySelected) {
      // }
      if (res['Bedroom']) {
        this.beadroom = res['Bedroom']
      }
      if (res['Bathroom']) {
        this.bathroom = res['Bathroom']
      }
      if (res['Minprice']) {
        this.MinPrices = res['Minprice']
      }
      if (res['Maxprice']) {
        this.MaxPrices = res['Maxprice']
      }
      if (res['TypeId']) {
        this.typeid = res['TypeId']
      }
      if (res['Title']) {
        this.title = res['Title']
      }
      if (res['categoryType']) {
        this.categoryType = res['categoryType']
      }
      // if (this.tag) {
      //   this.tag = res['tag']
      // }
      if (res['CategoryId']) {
        this.CategorySelected = res['CategoryId']
      }
      if (res['tag']) {
        this.tag = res['tag']
      }


      // if (this.tag) {
      //   this.tag = res['tag']
      //   console.log(res['tag'])
      //   console.log(this.tag)
      // }
      if (res['area']) {
        this.area = res['area'];
      }
    });




    this.form = this.fb.group({
      Category: [''],
      Bedroom: [''],
      Bathroom: [''],
      Minprice: [''],
      Maxprice: [''],
      TypeId: [''],
      Title: [''],
      categoryType: [''],
      area: ['']
    })

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const currentLang = langGetter();
    if (currentLang == '707') {
      this.arabicMode = true;

    }
    else {
      this.arabicMode = false;

    }
  }
  allProperties: Properties[];
  typeName: PropertyType;
  ngOnInit() {
    this.getAllTypes();
    this.getAllCategories();
    this.applyFilter();
    this.getAllAreas();
  }

  getAllAreas() {
    this.areaService.getAllAreas().subscribe((res: any) => {
      this.areas = res.data;
    })
  }

  applyFilter() {
    this.getSeacrchDetails(this.beadroom, this.bathroom, this.MinPrices, this.MaxPrices, this.typeid, this.area, this.title, this.tag, this.PageSize, this.PageNumber, this.CategorySelected, this.categoryType);
  }

  // Bedroom?: number, Bathroom?: any, Minprice?: number, Maxprice?: number, TypeId?: string,
  // Area?: any, Title?: string, tag?: any, PageSize?: number, PageNumber?: number, category?: any, categoryType?: number,
  getSeacrchDetails(beadroom, bathroom, MinPrices, MaxPrices, typeid, area, title, tag, PageSize, PageNumber, CategorySelected, categoryType) {
    if (CategorySelected) {
      this.PropertiesService.getAllPropertiesWithSearch(beadroom, bathroom, MinPrices, MaxPrices, typeid, area, title, tag, PageSize, PageNumber, CategorySelected, categoryType
      ).subscribe((res: any) => {
        this.allProperties = res.data;
        this.totalRecords = res.totalRecords;
      })
    }
    // else if (this.tag) {
    //   this.PropertiesService.getAllPropertiesWithSearch(beadroom, MinPrices, MaxPrices, typeid, area, title, PageSize, PageNumber, CategorySelected, categoryType, tag
    //   ).subscribe((res: any) => {
    //     this.allProperties = res.data;
    //     this.totalRecords = res.totalRecords;
    //   })
    // }
    else {
      this.PropertiesService.getAllPropertiesWithSearch(beadroom, bathroom, MinPrices, MaxPrices, typeid, area, title, tag, PageSize, PageNumber).subscribe((res: any) => {
        this.allProperties = res.data;
        this.totalRecords = res.totalRecords;
      })
    }

  }

  handleOnPageChange(pageEvent: PageEvent) {
    // this.skipCount += this.pageSizeOptions[0]
    // debugger
    this.getSeacrchDetails(
      this.beadroom, this.bathroom, this.MinPrices, this.MaxPrices, this.typeid, this.area, this.title, this.tag, pageEvent.pageSize, pageEvent.pageIndex + 1, this.CategorySelected, this.categoryType
    )
    // debugger
    console.log("pageEvent.pageIndex ", pageEvent.pageIndex + pageEvent.pageSize)
    console.log('Current skip', this.skipCount)
  }


  catchCategoryType(type) {
    this.categoryType = type;
    if (type) {
      this.typeSelected = true;
      if (this.CategorySelected) {
        this.applyFilter();
      }
      else {
        this.toastr.warning('Select the Category First to Filter by Type, Please!')
      }

    }
  }

  resetSearch() {
    this.form.reset();
  }
  getAllTypes() {
    this.PropertiesService.getPropertyTypes().subscribe((res: any) => {
      this.allType = res.data
    })
  }
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((res: any) => {
      this.categories = res.data;
    })
  }

  copyPropertyURL(id) {
    let url;
    let current = encodeURI(document.location.href).replace('all', 'project-details')
    url = `${current}/${id}`
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = url;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

  }
  getIamgeName(fileName: any): any {
    return `${environment.file_path}${fileName} `;
  }

}
