/**
 * Created by hariambari on 6/19/16.
 */
/**
 * Created by hariambari on 6/19/16.
 */
import {Component} from '@angular/core';
import {iatClueTextComponent} from "./iat-clue-text.component";

@Component({
  selector: 'iat-clue',
  template: `<div class="iat-clue-list">
                <div class="list">
                 <iat-clue-text [isi]="data[0][0]" [pos]="'left'"></iat-clue-text>
                 <iat-clue-text [isi]="data[0][1]"></iat-clue-text>
                </div>
                <div class="list">
                  <iat-clue-text></iat-clue-text>
                </div>
                <div class="list">
                  <iat-clue-text [isi]="data[1][0]"></iat-clue-text>
                  <iat-clue-text [isi]="data[1][1]"></iat-clue-text>
                </div>
            </div>`,
  styleUrls:["app/component/iat-test/iat-clue/iat-clue.css"],
  directives:[iatClueTextComponent]
})
export class iatClueComponent {

  leftvalue=["left1", "right1"];
  rightvalue=["right1", "right2"];

  data= [
    ["GOOD", "ITEMA"],
    ["BAD", "ITEMB"]
  ]

}
