import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../core/base.service';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService extends BaseService<any> {
  constructor(injector: Injector) {
      super(injector);
  }


  getAllServices(): Observable<Service[]> {
    return this.getAll('Service')
  }
  getServiceById(Id: string) {
    return this.getById('Service', Id)
  }
}
