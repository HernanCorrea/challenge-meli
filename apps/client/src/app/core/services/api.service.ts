import {
  HttpClient,
  HttpEvent,
} from '@angular/common/http';
import { Injectable,  } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(path: string, params: any = {}): Observable<HttpEvent<T>> {
    return this.http.get<T>(`${environment.apiUrl}${path}`, params);
  }

  put<T>(path: string, body: any, options?: any): Observable<HttpEvent<T>> {
    return this.http.put<T>(`${environment.apiUrl}${path}`, body, options);
  }

  patch<T>(path: string, body: any, options?: any): Observable<HttpEvent<T>> {
    return this.http.patch<T>(`${environment.apiUrl}${path}`, body, options);
  }

  post<T>(path: string, body: object, options?: any): Observable<HttpEvent<T>> {
    return this.http.post<T>(`${environment.apiUrl}${path}`, body, options);
  }

  delete<T>(path: string, body: any): Observable<HttpEvent<T>> {
    return this.http.delete<T>(`${environment.apiUrl}${path}`, body);
  }

  getFullPath<T>(path: string, params: any = {}): Observable<HttpEvent<T>> {
    return this.http.get<T>(`${path}`, params);
  }
}
