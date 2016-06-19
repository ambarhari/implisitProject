/**
 * Created by hariambari on 6/19/16.
 */
import {Component} from '@angular/core';
import {iatClueComponent} from "../iat-clue/iat-clue.component";

@Component({
  selector: 'iat-layout',
  template: `<div class="iat-container">
                <div class="iat-clue-container">
                <iat-clue></iat-clue>
</div>
                <div class="iat-item-container">ITEM</div>
                <div class="iat-respond-container">RESPOND</div>
            </div>`,
  styleUrls:["app/component/iat-test/iat-layout/iat-layout.css"],
  directives:[iatClueComponent]
})
export class iatLayoutComponent {
  isi = {
    satu :["good","bad"],
    dua : ["itemA", "itemB"]
  }
}
