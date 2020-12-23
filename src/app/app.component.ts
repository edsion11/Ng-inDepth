import { Component } from '@angular/core';
import {AComponent} from './a/a.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value?: string;
  constructor() {
  }

}
