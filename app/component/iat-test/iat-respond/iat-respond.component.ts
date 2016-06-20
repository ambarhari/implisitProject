/**
 * Created by hariambari on 6/20/16.
 */
import {Component} from '@angular/core';
import {iatRespondButtonComponent} from "./iat-respond-button.component";

@Component({
  selector: 'iat-respond',
  template: `<div>
                  <iat-respond-button nama="KIRI" class="tombol" ikon="icon-arrow-left"></iat-respond-button>
                  <iat-respond-button nama="KANAN" class="tombol" ikon="icon-arrow-right"></iat-respond-button>
            </div>`,
  inputs:["masuk"],
  styles:[`
      div {
        display: flex;
        align-items:stretch;
        align-content: stretch;
        flex-direction:row;
        position: relative;
      }
      .tombol{
        flex: 2;
        display: flex;
        border: solid;
        border-color: whitesmoke;
        vertical-align: middle;
        width: 100%;
        height: 100%;
      }
  `],
  directives:[iatRespondButtonComponent]
})
export class iatRespondComponent {



}
