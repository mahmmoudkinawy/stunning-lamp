import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { langGetter } from 'src/app/shared/helpers/helper';
import { Categories } from 'src/app/shared/models/categories';
import { ContactUS } from 'src/app/shared/models/contactus';
import { Socials } from 'src/app/shared/models/social';
import { CategoriesService } from 'src/app/shared/services/category.service';
import { ContactusService } from 'src/app/shared/services/contactus.service';
import { SocialService } from 'src/app/shared/services/socials.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  allBranches: ContactUS[] = [];
  socials: Socials[];

  MinPrices?: any
  BedRooms?: any = ''
  MaxPrices?: any
  category?: any = ''
  area?: any = ''
  bathroom?: any = ''
  title?: any = ''
  typeid?: any = ''
  categoriesList: Categories[] = [];
  arabicMode = false;
  constructor(private router: Router, private socialService: SocialService,
    private categoriesService: CategoriesService, private contactService: ContactusService) {
    const currentLang = langGetter();
    if (currentLang == '707') {
      this.arabicMode = true;
    }
    else {
      this.arabicMode = false;
    }
  }

  ngOnInit(): void {
    this.socialService.getAllSocials().subscribe((res: any) => {
      this.socials = res.data;
    })
    this.categoriesService.getAllCategories().subscribe((res: any) => {
      this.categoriesList = res.data;
    });
    this.getAllBranches();
  }
  getAllBranches() {
    this.contactService.getAllContactUs().subscribe((res: any) => {
      this.allBranches = res.data;
    });
  }

  goToFilterationPage(category) {
    this.router.navigate(['/latest-projects/all-properties', category])
  }

  public buttonClick(fragment: string): void {
    this.router.navigateByUrl('#' + fragment);
  }

}
