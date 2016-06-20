/**
 * Created by hariambari on 6/20/16.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'iat-item-image',
  template: `<img src={{getpath(masuk.nilai)}} height="300">`,
  inputs:["masuk"]
})
export class iatItemImageComponent {

  getpath(param){
    return "app/image/" + param + ".jpg";
  }

}
