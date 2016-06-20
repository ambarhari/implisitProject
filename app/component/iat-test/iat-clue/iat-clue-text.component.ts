import {Component} from '@angular/core';

@Component({
  selector: 'iat-clue-text',
  template: `<div class="list" [style.text-align]="pos">
                {{isi}}
            </div>`,
  inputs:["isi","pos"],
  styles:[`
    .list{
      flex-grow:1;
      height:100%;
      vertical-align: middle;
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
