import {Component} from '@angular/core';

@Component({
  selector: 'iat-clue-text',
  template: `<div class="list" [style.text-align]="pos">
                {{isi}}
            </div>`,
  inputs:["isi","pos"],
  styles:[`
    .list{
      vertical-align: middle;
      padding: 5px;
      color: white;
      text-transform: uppercase;
    }
    .center{
      text-align: center;
    }
    .left{
      text-align: left;
    }
    .right{
      text-align: right;
    }
      
  `]
})
export class iatClueTextComponent {

}
