import { Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export class BaseService<T> {
    protected http: HttpClient;
    private readonly baseUrl;

    constructor(injector: Injector ) {
        this.http = injector.get(HttpClient);
        this.baseUrl = environment.baseUrl;
    }

    protected getAll(url: string): Observable<any> {
        return this.http
            .get(`${this.baseUrl}/${url}`)
            .pipe(map((data: any) => data));
    }

    protected getAllCount(url: string): Observable<any> {
        return this.http
            .get(`${this.baseUrl}/${url}`)
            .pipe(map((data: any) => data));
    }
    getAllResult(url: any): Observable<any> {
        return this.http
            .get(`${this.baseUrl}/${url}`)
            .pipe(map((data: any) => data));
    }

    // tslint:disable-next-line:typedef
    getById(url: string, id: string) {
        return this.get(`${url}/${id}`);
    }
    protected get(url: string): Observable<any> {
        return this.http
            .get(`${this.baseUrl}/${url}`)
            .pipe(map((data: any) => data));
    }

    protected post(url: string, data: any): Observable<any> {
        return this.http
            .post(`${this.baseUrl}/${url}`, data)
            // tslint:disable-next-line:no-shadowed-variable
            .pipe(map((data: any) => data));
    }

    protected put(url: string, data: any): Observable<any> {
        return this.http
            .put(`${this.baseUrl}/${url}`, data)
            // tslint:disable-next-line:no-shadowed-variable
            .pipe(map((data: any) => data));
    }

    protected remove(url: string, id: string | number): Observable<any> {
        return this.http
            .delete(`${this.baseUrl}/${url}/${id}`)
            .pipe(map((data: any) => data));
    }

}
