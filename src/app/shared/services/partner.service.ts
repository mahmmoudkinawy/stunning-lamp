import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { inherits } from 'util';
import { BaseService } from '../core/base.service';
import { Partner } from '../models/partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService extends BaseService<any> {
  constructor(injector: Injector) {
      super(injector);
  }
  getAllPartners(): Observable<Partner[]> {
        return this.getAll('Partner')
      }
      
  getPartnerById(Id: string) {
        return this.getById('Partner', Id)
    }
}
