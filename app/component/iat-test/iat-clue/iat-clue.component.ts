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
            align-items: stretch;
            justify-content: space-between;
            vertical-align: center;
          }
          
          .list {
            padding: 3pt;
            width:30%;
            color:white;
            height: 3%;
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
