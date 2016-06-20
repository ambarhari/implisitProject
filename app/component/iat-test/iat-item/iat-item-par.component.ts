/**
 * Created by hariambari on 6/20/16.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'iat-item-par',
  template: `<p *ngFor="let i of masuk.nilai">{{i}}</p>`,
  inputs:["masuk"]
})
export class iatItemParComponent {
  isi = "ini dari iat test"
}
