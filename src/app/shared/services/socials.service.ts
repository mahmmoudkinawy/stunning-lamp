import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Socials } from '../models/social';
import { BaseService } from '../core/base.service';


@Injectable({
    providedIn: 'root'
})
export class SocialService extends BaseService<any> {
    constructor(injector: Injector) {
        super(injector);
    }
    getAllSocials(): Observable<Socials[]> {
        return this.getAll('Social')
    }
}
