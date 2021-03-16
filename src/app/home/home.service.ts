import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root',
})
export class HomeService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load data from a single API endpoint
    public getUsers() : Observable<any[]> {
        return this.http.get<any[]>('https://api.mocki.io/v1/b043df5a');
    }

    public Get() : Observable<any[]> {
        return this.http.get<any[]>('data.json');
    }
}
