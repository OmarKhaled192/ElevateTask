import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    baseUrl: any = environment.baseUrl;

    constructor(private http: HttpClient) {}

    GetProducts(): Observable<any> {
        return this.http.get(`${this.baseUrl}/products`);
    }

    GetProductDetails(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/products/${id}`);
    }

    GetProductsFilter(keyword: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/products?keyword=${keyword}`);
    }
}
