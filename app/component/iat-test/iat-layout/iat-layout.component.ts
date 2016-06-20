/**
 * Created by hariambari on 6/19/16.
 */
import {Component} from '@angular/core';
import {iatClueComponent} from "../iat-clue/iat-clue.component";
import {iatItemComponent} from "../iat-item/iat-item.component";

@Component({
  selector: 'iat-layout',
  template: `<div class="iat-container">
                <div class="iat-clue-container">
                <iat-clue></iat-clue>
             </div>
                <div class="iat-item-container">
                  <iat-item></iat-item>
                </div>
                <div class="iat-respond-container">RESPOND</div>
            </div>`,
  styleUrls:["app/component/iat-test/iat-layout/iat-layout.css"],
  directives:[iatClueComponent, iatItemComponent]
})
export class iatLayoutComponent {
  isi = {
    satu :["good","bad"],
    dua : ["itemA", "itemB"]
  }
}
