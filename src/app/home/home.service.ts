import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from '../contact/contact.component';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseURL = 'http://localhost:8080/api/products';
const testUrl = 'http://localhost:60018/api/Product';
const _testUrl = 'https://api.mocki.io/v1/b043df5a';
@Injectable({
    providedIn: 'root',
})
export class HomeService {

    constructor(private httpClient: HttpClient) { }

    // Uses http.get() to load data from a single API endpoint
    public getUsers(): Observable<ProductResponse> {
        return this.httpClient.get<ProductResponse>(testUrl);
    }

    public getById(id: Number): Observable<any> {
        return this.httpClient.get(`${baseURL}/${id}`);
    }

    public create(data: any): Observable<ProductResponse> {
        return this.httpClient.post<ProductResponse>(testUrl, data);
    }

    public update(id: Number, data: any): Observable<any> {
        return this.httpClient.put(`${baseURL}/${id}`, data);
    }

    public delete(id: Number): Observable<any> {
        return this.httpClient.delete(`${baseURL}/${id}`);
    }

    public deleteAll(): Observable<any> {
        return this.httpClient.delete(baseURL);
    }

    public get(): Observable<any[]> {
        return this.httpClient.get<any[]>('data.json');
    }

    public searchByName(name: String): Observable<any> {
        return this.httpClient.get(`${baseURL}?name=${name}`);
    }
}
