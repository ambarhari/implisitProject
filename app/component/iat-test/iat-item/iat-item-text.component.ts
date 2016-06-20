/**
 * Created by hariambari on 6/20/16.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'iat-item-text',
  template: `<p>{{masuk.nilai}}</p>`,
  inputs:['masuk'],
})
export class iatItemTextComponent {
  isi = "ini dari iat test"
}
