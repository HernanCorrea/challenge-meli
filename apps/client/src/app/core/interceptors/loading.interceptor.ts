import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpContextToken,
  HttpErrorResponse,
  HttpContext,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { setLoading } from '../store/load/load.actions';

export const METHOD_ID = new HttpContextToken<string>(() => 'method');

export const setMethodId = (methodId: string) => new HttpContext().set(METHOD_ID, methodId);

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const type = request.context.get(METHOD_ID);
    this.store.dispatch(
      setLoading({
        load: { isLoading: true, type },
      })
    );
    return next.handle(request.clone()).pipe(
      catchError((err) => {
        this.store.dispatch(
          setLoading({
            load: { isLoading: false, type },
          })
        );
        return of(err);
      }),
      map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          this.store.dispatch(
            setLoading({
              load: { isLoading: false, type },
            })
          );
        }
        return evt;
      })
    );
  }
}
