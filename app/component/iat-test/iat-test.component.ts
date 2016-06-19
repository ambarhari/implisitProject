import {Component} from '@angular/core';
import {iatLayoutComponent} from "./iat-layout/iat-layout.component";

@Component({
  selector: 'iat-test',
  template: `<iat-layout></iat-layout>
            `,
  directives:[iatLayoutComponent]
})
export class iatTestComponent {
  isi = "ini dari iat test"
}
