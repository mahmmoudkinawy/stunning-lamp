import { Properties, PropertyType } from './../models/properties';
import { BaseService } from './../core/base.service';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PropertiesService extends BaseService<any> {
    constructor(injector: Injector) {
        super(injector);
    }
    getAllPropertiesWithSearch(
        Bedroom?: number, Bathroom?: any, Minprice?: number, Maxprice?: number, TypeId?: string,
        Area?: any, Title?: string, tag?: any, PageSize?: number, PageNumber?: number, category?: any, categoryType?: number,
    ): Observable<Properties[]> {
        if (category || categoryType) {
            return this.getAll(`Properties?Bedroom=${Bedroom}&Bathroom=${Bathroom}&Minprice=${Minprice}&Maxprice=${Maxprice}&TypeId=${TypeId}&Area=${Area}&Title=${Title}&Category=${category}&CategoryType=${categoryType}&Tag=${tag}&PageSize=${PageSize}&PageNumber=${PageNumber}`)
        }
        else {
            return this.getAll(`Properties?Bedroom=${Bedroom}&Bathroom=${Bathroom}&Minprice=${Minprice}&Maxprice=${Maxprice}&TypeId=${TypeId}&Area=${Area}&Title=${Title}&Tag=${tag}&PageSize=${PageSize}&PageNumber=${PageNumber}`)
        }
    }
    getRelatedProperties(Bedroom?: any, Bathroom?: any, Minprice?: any, Maxprice?: any, TypeId?: any, Category?: any, Area?: any): Observable<Properties[]> {
        if (Category) {
            return this.getAll(`Properties/Related?Bedroom=${Bedroom
                }&Bathroom=${Bathroom}&Minprice=${Minprice}&Maxprice=${Maxprice}&TypeId=${TypeId}&Category=${Category}&Area=${Area}`)
        }
        else {
            return this.getAll(`Properties/Related?Bedroom=${Bedroom
                }&Bathroom=${Bathroom}&Minprice=${Minprice}&Maxprice=${Maxprice}&TypeId=${TypeId}&Area=${Area}`)
        }
    }
    getAllProperties(): Observable<Properties[]> {
        return this.getAll('Properties/All')
    }
    getPropertiesById(Id: string) {
        return this.getById('Properties', Id)
    }

    getPropertyTypes(): Observable<PropertyType[]> {
        return this.getAll('Types')
    }
    getPropertyTypesById(id?: string): Observable<PropertyType[]> {
        return this.getById('Types', id)
    }
    getPropertiesByCategoryType(categoryType?: any): Observable<Properties[]> {
        return this.getAll(`Properties?CategoryType=${categoryType}`);
    }
    getNACProperties(tag?: any): Observable<Properties[]> {
        return this.getAll(`Properties?Tag=${tag}`);
    }

    getLatestProperties(): Observable<Properties[]> {
        return this.getAll(`Properties/Latest`);
    }
}
