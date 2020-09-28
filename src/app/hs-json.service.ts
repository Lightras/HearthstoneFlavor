import { Injectable } from '@angular/core';
import {Art, Card} from './interfaces';
import {EMPTY, Observable} from 'rxjs';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {catchError} from 'rxjs/operators';
import HearthstoneJSON from 'hearthstonejson-client';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable({
   providedIn: 'root'
})
export class HsJsonService {
   hsjson: HearthstoneJSON;

   constructor(
      private http: HttpClient
   ) {
      this.hsjson = new HearthstoneJSON();
   }

   getAllCards(): Observable<any> {
      return fromPromise(this.hsjson.get(58213));
   }

   getArt(id: string): Observable<any> {
      const headers = new HttpHeaders({
         contentType: 'image/png'
      });

      const options = {responseType: 'text', headers};

      // @ts-ignore
      return this.http.get<any>('https://cors-anywhere.herokuapp.com/https://art.hearthstonejson.com/v1/orig/EX1_001.png', options);
   }
}
