import {Component} from '@angular/core';
import {iatItemTextComponent} from "./iat-item-text.component";
import {iatItemParComponent} from "./iat-item-par.component";
import {iatItemImageComponent} from "./iat-item-image.component";
import {iatItemIkonComponent} from "./iat-item-ikon.component";

@Component({
  selector: 'iat-item',
  template: `<div>
                <iat-item-image 
                    *ngIf="isi.tipe === 'image'" 
                    [masuk]="isi" 
                    class="item">
                </iat-item-image>
                <iat-item-text 
                    *ngIf="isi.tipe === 'text'"  
                    [masuk]="isi" 
                    class="item">
                </iat-item-text>
                <iat-item-par 
                    *ngIf="isi.tipe === 'par'" 
                    [masuk]="isi" 
                    class="item">
                </iat-item-par>
                <iat-item-ikon 
                    *ngIf="isi.tipe === 'ikon'" 
                    [masuk]="isi" 
                    class="item">
                </iat-item-ikon>
             </div>           
`,
  directives:[iatItemTextComponent, iatItemParComponent,iatItemImageComponent, iatItemIkonComponent],
  styles:[`
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      width: 100%;
    }
    .item{
      width: 100%;
      color: whitesmoke;     
    }
  `]
})
export class iatItemComponent {
  dataImage = {
    tipe: "image",
    nilai: "1"
  };

  dataText = {
    tipe: "text",
    nilai: "ini data dari text"
  };

  dataPar = {
    tipe: "par",
    nilai: ["paragraph 1", "paragraph 2", "paragraph 3"]
  };

  dataIkon={
    tipe: "ikon",
    nilai: "icon-remove wrong"

  };

  dataIkon2={
    tipe: "ikon",
    nilai: "icon-ok right"

  };


  isi = this.dataIkon2;

}
