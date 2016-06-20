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
                 <iat-clue-text *ngFor="let itemLeft of leftvalue" [isi]="itemLeft" pos="left"></iat-clue-text>
                </div>
                <div class="list">
                  <iat-clue-text [isi]="centervalue" pos="center"></iat-clue-text>
                </div>
                <div class="list">
                  <iat-clue-text *ngFor="let itemRight of rightvalue" [isi]="itemRight" pos="right"></iat-clue-text>
                </div>
            </div>`,
  styles:[`
            .iat-clue-list{
            display:flex;
            flex-direction:row;
            align-items: center;
            justify-content: center;
            vertical-align: center;
            width: 100%;
          }
          
          .list {
            flex-grow: 1;
            width: 30%;
            display: flex;
            flex-direction: column;
            padding: 2px;
            vertical-align: middle;
          }
  `],
  directives:[iatClueTextComponent]
})
export class iatClueComponent {

  leftvalue=["left1","OR", "left2"];
  rightvalue=["right1", "OR" ,"right2"];
  ronde=1;
  centervalue= this.ronde + "/7";


  data= [
    ["GOOD", "ITEMA"],
    ["BAD", "ITEMB"]
  ]

}
