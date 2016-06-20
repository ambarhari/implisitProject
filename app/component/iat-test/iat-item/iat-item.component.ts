import {Component} from '@angular/core';
import {iatItemTextComponent} from "./iat-item-text.component";
import {iatItemParComponent} from "./iat-item-par.component";
import {iatItemImageComponent} from "./iat-item-image.component";

@Component({
  selector: 'iat-item',
  template: `              
                <iat-item-image *ngIf="isi.tipe === 'image'" [masuk]="isi"></iat-item-image>
                <iat-item-text *ngIf="isi.tipe === 'text'"  [masuk]="isi"></iat-item-text>
                <iat-item-par *ngIf="isi.tipe === 'par'" [masuk]="isi"></iat-item-par>

                
              

`,
  directives:[iatItemTextComponent, iatItemParComponent,iatItemImageComponent]
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


  isi = this.dataImage;

}
