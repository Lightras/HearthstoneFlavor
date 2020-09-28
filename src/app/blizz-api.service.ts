import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Card, CardsResponse} from './interfaces';
import {map} from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class BlizzApiService {

   constructor(
      private http: HttpClient
   ) { }

   getCards(): Observable<any> {
      return this.http.get('/blizzAPI/hearthstone/cards');
   }

   getCard(id: number): Observable<Card> {
      return this.http.get<CardsResponse>(`/blizzAPI/hearthstone/cards?id=${id}`).pipe(
         map(cardsResponse => {
            if (cardsResponse.cardCount === 0) {
               console.error(`No such card: id ${id}`);
            } else {
               return cardsResponse.cards[0];
            }
         })
      );
   }

   getMetaData(): Observable<any> {
      return this.http.get('/blizzAPI/hearthstone/metadata');
   }
}
