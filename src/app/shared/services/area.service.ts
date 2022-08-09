import { BaseService } from './../core/base.service';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../models/area';


@Injectable({
    providedIn: 'root'
})
export class AreaService extends BaseService<any> {
    constructor(injector: Injector) {
        super(injector);
    }
    getAllAreas(): Observable<Area[]> {
        return this.getAll('Area')
    }
    getAreaById(Id: string) {
        return this.getById('Area', Id)
    }
}
