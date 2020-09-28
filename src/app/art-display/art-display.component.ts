import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Card} from '../interfaces';

@Component({
   selector: 'app-art-display',
   templateUrl: './art-display.component.html',
   styleUrls: ['./art-display.component.sass', './loader.sass']
})
export class ArtDisplayComponent implements OnInit, OnChanges {
   @Input() card: Card;

   isImgLoaded: boolean;

   constructor() { }

   ngOnInit(): void {

   }

   ngOnChanges(changes: SimpleChanges): void {
      if (changes.card) {
         this.isImgLoaded = false;
      }
   }

   imgOnload(): void {
      this.isImgLoaded = true;
   }

}
