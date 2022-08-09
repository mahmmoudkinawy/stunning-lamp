import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "../core/base.service";
import { Team } from "../models/team";



@Injectable({
    providedIn: 'root'
})
export class TeamService extends BaseService<any> {
    constructor(injector: Injector) {
        super(injector);
    }
    getAllTeam(): Observable<Team[]> {
        return this.getAll('Team')
    }
}
