import { BaseService } from './../core/base.service';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CallTrack } from '../models/callTrack';


@Injectable({
    providedIn: 'root'
})
export class CallTrackService extends BaseService<any> {
    constructor(injector: Injector) {
        super(injector);
    }
    createCallTrack(callTrack: CallTrack) {
        return this.post('CallTrack', callTrack)
    }
}
