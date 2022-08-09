import { Properties, PropertyType } from './../../../shared/models/properties';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { langGetter } from 'src/app/shared/helpers/helper';
import { Sections } from 'src/app/shared/models/about-us';
import { Categories } from 'src/app/shared/models/categories';
import { CategoryType, CategoryTypeMapping } from 'src/app/shared/models/enum';
import { SectionService } from 'src/app/shared/services/abouts.service';
import { CategoriesService } from 'src/app/shared/services/category.service';
import { PropertiesService } from 'src/app/shared/services/properties.service';
import { Area } from 'src/app/shared/models/area';
import { AreaService } from 'src/app/shared/services/area.service';
import { FormBuilder, FormGroup } from '@angular/forms';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  types: PropertyType[];

  MinPrices?: any
  BedRooms?: any = ''
  MaxPrices?: any
  category?: any = ''
  area?: any = ''
  bathroom?: any = ''
  title?: any = ''
  typeid?: any = ''
  categoryType?: any = ''
  tag?: any = ''
  allProperties: Properties[];
  categories: Categories[];
  beds = [1, 2, 3, 4, 5, 6, 7]
  arabicMode = false;
  public categoryTypeMapping = CategoryTypeMapping;
  public categoryTypes = Object.values(CategoryType).filter(
    (value) => typeof value === 'number'
  );

  sections: Sections[];
  slogon: Sections;
  areas: Area[];
  form: FormGroup;
  constructor(private propService: PropertiesService, private router: Router,
    private categoryService: CategoriesService, private aboutService: SectionService,
    private fb: FormBuilder, private areaService: AreaService) {
    const currentLang = langGetter();
    if (currentLang == '707') {
      this.arabicMode = true;
    }
    else {
      this.arabicMode = false;
    }
  }

  ngOnInit(): void {
    this.getAllTypes();
    this.getAllCategories();
    this.getSlogon();
    this.getAllAreas();

    this.form = this.fb.group({
      Category: [' '],
      Bedroom: [' '],
      Bathroom: [' '],
      Minprice: [0],
      Maxprice: [0],
      TypeId: [' '],
      Title: [' '],
      categoryType: [' '],
      area: []
    });
  }

  getAllTypes() {
    this.propService.getPropertyTypes().subscribe((res: any) => {
      this.types = res.data;
    });
  }
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((res: any) => {
      this.categories = res.data;
    });
  }

  getAllAreas() {
    this.areaService.getAllAreas().subscribe((res: any) => {
      this.areas = res.data;
    });
  }


  getSlogon() {
    this.aboutService.getAllSections().subscribe((res: any) => {
      this.sections = res.data;
      for (let about of this.sections) {
        if (about.tag == 'slogon') {
          this.slogon = about;
        }
      }
    })
  }

  catchCategoryType(type) {
    this.categoryType = type;
  }

  goToFilterationPage() {
    this.MinPrices = 0;
    this.MaxPrices = 0;
    if (!(this.title || this.BedRooms || this.bathroom || this.typeid || this.title || this.category || this.categoryType)) {
      this.title = ''
      this.BedRooms = ''
      this.bathroom = ''
      this.typeid = ''
      this.title = ''
      this.category = ''
      this.categoryType = ''
    }
    this.router.navigate(['/latest-projects/all-projects', this.BedRooms, this.bathroom, this.MinPrices, this.MaxPrices, this.typeid, this.title, this.category, this.categoryType, this.tag, this.area])
  }

  resetSearch() {
    // location.reload()
    this.form.reset();
    console.log(this.form.controls)
  }


}
