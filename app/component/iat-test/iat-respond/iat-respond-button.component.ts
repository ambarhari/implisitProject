/**
 * Created by hariambari on 6/20/16.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'iat-respond-button',
  template: `<div class="container">
                  <div [ngClass]="ikon" class="icon-2x aikon"></div>
                  <div class="tulisan">{{nama}}</div>

            </div>`,
  inputs:["nama","ikon"],
  styles:[`
  .container{
    flex-grow:1;
    display: flex;
    flex-direction: column;
    color: black;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    box-shadow: 1px 1px 1px 1px dimgray;
  }
  .container:active{
    box-shadow: none;
    background-color: lightgrey;
  }
  .aikon{
    color:darkslategrey;
    padding: 2px 2px 2px 2px;
  }
  .tulisan{
    font-size: 1.5rem;
    padding: 2px 2px 2px 2px;
  }
  
  `]
})
export class iatRespondButtonComponent {


}
