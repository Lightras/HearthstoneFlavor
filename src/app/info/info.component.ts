import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-info',
   templateUrl: './info.component.html',
   styleUrls: ['./info.component.sass']
})
export class InfoComponent implements OnInit {
   isShowInfo: boolean;

   constructor() { }

   ngOnInit(): void {}

   showInfo(): void {
      this.isShowInfo = true;
   }

   hideInfo(): void {
      this.isShowInfo = false;
   }


}
