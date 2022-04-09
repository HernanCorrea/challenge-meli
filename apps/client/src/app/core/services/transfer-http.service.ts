import { Injectable } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class TransferHttpService {
  constructor(
    private transferHttp: TransferState,
    private apiService: ApiService
  ) {}
  get(url: string, options?: any): Observable<any> {
    return this.getData(url, options, () => {
      return this.apiService.get(url, options);
    });
  }
  post(url: string, body: any, options?: any): Observable<any> {
    return this.getData(url, options, () => {
      return this.apiService.post(url, body, options);
    });
  }
  delete(url: string, options?: any): Observable<any> {
    return this.getData(url, options, () => {
      return this.apiService.delete(url, options);
    });
  }
  put(url: string, body: any, options?: any): Observable<any> {
    return this.getData(url, options, () => {
      return this.apiService.put(url, body, options);
    });
  }
  getData(url: string, options: any, callback: () => Observable<any>): Observable<any> {
    const optionsString = options ? JSON.stringify(options) : '';
    const key = makeStateKey(`${url + optionsString}`);
    try {
      return this.resolveData(key);
    } catch (e) {
      console.log('In catch');
      return callback().pipe(
        tap((data) => {
          console.log('cache set');
          this.setCache(key, data);
        })
      );
    }
  }
  resolveData(key: any) {
    let resultData: any;
    if (this.hasKey(key)) {
      resultData = this.getFromCache(key);
      console.log('getFromCache', resultData);
    } else {
      throw new Error();
    }
    return from(Promise.resolve(resultData));
  }
  setCache(key: any, value: any) {
    this.transferHttp.set(key, value);
  }
  getFromCache(key: any) {
    return this.transferHttp.get(key, null); // null set as default value
  }
  hasKey(key: any) {
    return this.transferHttp.hasKey(key);
  }
}
