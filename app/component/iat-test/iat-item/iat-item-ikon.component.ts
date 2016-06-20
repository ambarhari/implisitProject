/**
 * Created by hariambari on 6/21/16.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'iat-item-ikon',
  template: `<div [ngClass]="masuk.nilai" class="icon-5x"></div>`,
  inputs:["masuk"],
  styles:[`
    .wrong{
      color: red;
    }
    
    .right{
      color: greenyellow;
    }
  `]
})
export class iatItemIkonComponent {

}
