import { Observable } from 'rxjs';
import { ICarts } from './../models/ICarts';
import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Injectable()
export class CartsService {
    private apiUrl: string = 'https://fakestoreapi.com/products';

    constructor(private http: _HttpClient) {}

    getData(): Observable<ICarts[]> {
        return this.http.get<ICarts[]>(`${this.apiUrl}`);
    }
    getSingleData(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    postData(data: ICarts): Observable<ICarts[]> {
        return this.http.post<ICarts[]>(`${this.apiUrl}`, data);
    }
    updateData(data: any): Observable<any> {
        return this.http.patch(`${this.apiUrl}/`, data);
    }
    deleteData(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
