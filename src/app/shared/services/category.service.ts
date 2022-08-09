import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "../core/base.service";
import { Categories } from "../models/categories";

@Injectable({
    providedIn: 'root'
})
export class CategoriesService extends BaseService<any> {
    constructor(injector: Injector) {
        super(injector);
    }
    getAllCategories(): Observable<Categories[]> {
        return this.getAll('Category');
    }
    getCategoryById(Id: string) {
        return this.getById('Category', Id);
    }
}
