import {Component} from '@angular/core';
import {iatTestComponent} from "./component/iat-test/iat-test.component";


@Component({
    selector: 'my-app',
    template: `<div>
                  <div class="router-container">ROUTER</div>
                  <iat-test></iat-test>

               </div>`,
    directives: [iatTestComponent],
    styles:[`
      .router-container{
        color: white;
        background-color: darkslateblue;
        padding: 5pt;
      
      }
    `]
})
export class AppComponent {



}
