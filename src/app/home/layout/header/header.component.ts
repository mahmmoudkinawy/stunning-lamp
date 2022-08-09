import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tag = 'NAC'
  MinPrices?: any
  BedRooms?: any = ''
  MaxPrices?: any
  category?: any = ''
  area?: any = ''
  bathroom?: any = ''
  title?: any = ''
  typeid?: any = ''
  categoryType?: any = ''
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  public buttonClick(fragment: string): void {
    this.router.navigateByUrl('#' + fragment);
  }

  goToFilterationPage() {
    this.MinPrices = 0;
    this.MaxPrices = 0;
    if (!(this.title || this.BedRooms || this.bathroom || this.typeid || this.title || this.category || this.categoryType || this.tag || this.area)) {
      this.title = ''
      this.BedRooms = ''
      this.bathroom = ''
      this.typeid = ''
      this.title = ''
      this.category = ''
      this.categoryType = ''
      this.tag = ''
      this.area = ''
    }
    this.router.navigate(['/latest-projects/all-projects', this.BedRooms, this.bathroom, this.MinPrices, this.MaxPrices, this.typeid, this.title, this.category, this.categoryType, this.tag, this.area])
  }
}


