import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../core/base.service';
import { ContactUS, Mail } from '../models/contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService extends BaseService<any> {
  constructor(injector: Injector) {
    super(injector);
  }
  getAllContactUs(): Observable<ContactUS[]> {
    return this.getAll('ContactUs');
  }
  postContactForm(contactForm: any): Observable<ContactUS> {
    return this.post('ContactUs/Add-Form', contactForm);
  }

  postForm(obj: Mail): Observable<Mail> {
    return this.post(`Mail`, obj);
  }

}

