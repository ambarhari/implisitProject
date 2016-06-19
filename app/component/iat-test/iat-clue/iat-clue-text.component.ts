import {Component} from '@angular/core';

@Component({
  selector: 'iat-clue-text',
  template: `<div class="list">
                {{isi}}{{pos}}
            </div>`,
  inputs:["isi","pos"],
  styles:[`
    .list{
      flex-grow:1;
      height:100%;
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
