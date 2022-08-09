import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sections } from 'src/app/shared/models/about-us';
import { SectionService } from 'src/app/shared/services/abouts.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  sections: Sections[];
  about: Sections;
  why: Sections;
  constructor(private aboutService: SectionService) {
   }

  ngOnInit(): void {
    this.aboutService.getAllSections().subscribe((res: any) => {
      this.sections = res.data;
      for (let about of this.sections) {
        if (about.tag == 'about') {
          this.about = about;
        }
        if(about.tag == 'why'){
          this.why = about;
        }
      }
    });
  }

  getImgPath(fileName: any): any {
    return `${environment.file_path}${fileName}`;
  }

}
