import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/shared/models/categories';
import { Category, CategoryMapping } from 'src/app/shared/models/enum';
import { CategoriesService } from 'src/app/shared/services/category.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public categoryMapping = CategoryMapping;
  public categories = Object.values(Category).filter(
    (value) => typeof value === 'number'
  );

  categoriesList: Categories[] = [];
  constructor(private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoriesService.getAllCategories().subscribe((res: any) => {
      this.categoriesList = res.data;
    });
  }

  getPropByCategoryId(category) {
    this.router.navigate(['/latest-projects/all-properties', category])
  }

  getFilePath(fileName?: any) {
    return `${environment.file_path}${fileName}`;
  }

}
