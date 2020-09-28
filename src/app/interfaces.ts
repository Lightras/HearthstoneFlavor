import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

export interface TokenResponse {
   access_token: string;
   expires: number;
}

export interface Card {
   id: string;
   flavor: string;
   artist: string;
   name: string;
}

export interface CardsResponse {
   cardCount: number;
   cards: Card[];
}

export interface Art {
   id: number;
}
