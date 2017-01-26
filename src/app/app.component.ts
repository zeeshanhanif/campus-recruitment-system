import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
    @select(['auth','isLoggedin']) isLoggedin$ :Observable<any>;
    constructor() {
    }
}
