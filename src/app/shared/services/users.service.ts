import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from './../models/IUsers';

@Injectable()
export class UsersService {
    private apiUrl: string = 'http://localhost:5000/users';

    constructor(private http: HttpClient) {}

    getData(): Observable<IUsers[]> {
        return this.http.get<IUsers[]>(`${this.apiUrl}`);
    }
    getSingleData(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    postData(data: IUsers): Observable<IUsers[]> {
        return this.http.post<IUsers[]>(`${this.apiUrl}`, data);
    }
    updateData(data: any, id: number): Observable<any> {
        return this.http.patch(`${this.apiUrl}/${id}`, data);
    }
    deleteData(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
