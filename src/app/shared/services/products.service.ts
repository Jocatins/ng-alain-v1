import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable()
export class ProductsService {
    private apiUrl: string = 'https://fakestoreapi.com/products';

    constructor(private http: HttpClient) {}

    getData(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.apiUrl}`);
    }
    getSingleData(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    postData(data: IProduct): Observable<IProduct[]> {
        return this.http.post<IProduct[]>(`${this.apiUrl}`, data);
    }
    updateData(data: any): Observable<any> {
        return this.http.patch(`${this.apiUrl}/`, data);
    }
    deleteData(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
