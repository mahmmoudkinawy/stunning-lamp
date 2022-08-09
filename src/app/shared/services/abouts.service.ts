import { BaseService } from './../core/base.service';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Sections } from '../models/about-us';


@Injectable({
    providedIn: 'root'
})
export class SectionService extends BaseService<any> {
    constructor(injector: Injector) {
        super(injector);
    }
    getAllSections(): Observable<Sections[]> {
        return this.getAll('AboutUs')
    }
    getSectionById(Id: string) {
        return this.getById('AboutUs', Id)
    }
}
