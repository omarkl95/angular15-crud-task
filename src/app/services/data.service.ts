import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  update(id: any, input: any) {
    return this.http.patch(`${this.data}/${id}`, input);
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.data}`);
  }
  getSingle(id: any): Observable<any> {
    return this.http.get(`${this.data}/${id}`);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.data}/${id}`);
  }
  post(input: string): Observable<any> {
    return this.http.post<any>(`${this.data}`, input);
  }
}
