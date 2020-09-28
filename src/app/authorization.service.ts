import { Injectable } from '@angular/core';
import {
   HttpClient,
   HttpEvent,
   HttpHandler,
   HttpHeaders,
   HttpInterceptor,
   HttpParams,
   HttpRequest,
   HttpResponse
} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {TokenResponse} from './interfaces';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class AuthorizationService implements HttpInterceptor {

   region: 'eu';

   constructor(
      private http: HttpClient
   ) {
      this.region = 'eu';
   }

   token: string;


   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (req.url.includes('/oauth/token')) {
         return next.handle(req);
      }

      if (req.url.startsWith('/blizzAPI')) {
         let newReq = req.clone({
            url: req.url.replace('/blizzAPI', `https://${this.region}.api.blizzard.com`)
         });

         if (this.token) {
            newReq = newReq.clone({
               setHeaders: {
                  Authorization: `Bearer ${this.token}`
               }
            });

            return next.handle(newReq);
         } else {
            return this.getToken().pipe(
               switchMap((r) => {
                  if (r.access_token) {
                     this.token = r.access_token;
                     newReq = newReq.clone({
                        headers: newReq.headers.append('Authorization', `Bearer ${this.token}`)
                     });
                     return next.handle(newReq);
                  } else {
                     console.error('Cannot retrieve token');
                     return EMPTY;
                  }
               })
            );
         }
      } else {
         return next.handle(req);
      }

   }

   getToken(): Observable<TokenResponse> {
      const headers = new HttpHeaders({
         Authorization: 'Basic ' + btoa('ebba5d4e44004b23b4f120f07f59cfba:OF3IvChTSXfGRhwDrnQsVm8bFFCsGxm8')
      });

      const params = new HttpParams().set('grant_type', 'client_credentials');

      return this.http.post<TokenResponse>(
         'https://us.battle.net/oauth/token',
         {},
         {headers, params}
      );
   }
}
