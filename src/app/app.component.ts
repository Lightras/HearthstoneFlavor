import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from './authorization.service';
import {BlizzApiService} from './blizz-api.service';
import {HsJsonService} from './hs-json.service';
import {HttpClient} from '@angular/common/http';
import {Card} from './interfaces';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
   title = 'HSAPI';
   cards: Card[];
   displayCard: Card;

   constructor(
      private authService: AuthorizationService,
      private blizzAPI: BlizzApiService,
      private hsJsonService: HsJsonService,
   ) {}

   ngOnInit(): void {

      this.hsJsonService.getAllCards().subscribe(cards => {
         this.cards = cards;
         this.displayCard = this.getRandomCard();
      });
   }

   getRandomCard(): Card {
      const cardsWithArt = this.cards.filter(card => card.artist);
      return cardsWithArt[Math.floor(Math.random() * cardsWithArt.length)];
   }

   refreshCard(): void {
      this.displayCard = this.getRandomCard();
   }
}
