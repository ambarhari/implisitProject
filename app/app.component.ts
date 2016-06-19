import {Component} from '@angular/core';
import {iatTestComponent} from "./component/iat-test/iat-test.component";


@Component({
    selector: 'my-app',
    template: `<iat-test></iat-test>`,
    directives: [iatTestComponent]
})
export class AppComponent {



}
