import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserResponse } from '../user/user.component';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const testUrl = 'http://localhost:60018/api/User';
@Injectable({
    providedIn: 'root',
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    // Uses http.get() to load data from a single API endpoint
    public getUsers(): Observable<UserResponse> {
        return this.httpClient.get<UserResponse>(testUrl);
    }

    public getById(id: Number): Observable<UserResponse> {
        return this.httpClient.get<UserResponse>(`${testUrl}/${id}`);
    }

    public create(data: any): Observable<UserResponse> {
        return this.httpClient.post<UserResponse>(testUrl, data);
    }

    public update(id: Number, data: any): Observable<UserResponse> {
        return this.httpClient.put<UserResponse>(`${testUrl}/${id}`, data);
    }

    public delete(id: Number): Observable<any> {
        return this.httpClient.delete(`${testUrl}/${id}`);
    }

    public deleteAll(): Observable<any> {
        return this.httpClient.delete(testUrl);
    }

    public get(): Observable<any[]> {
        return this.httpClient.get<any[]>('data.json');
    }

    public searchByName(name: String): Observable<any> {
        return this.httpClient.get(`${testUrl}?name=${name}`);
    }
}
