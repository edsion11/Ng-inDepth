import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  icon = 'a';
  get classes() {
    const cssClasses= {
      fa: true
    };
    //ts 7053
    cssClasses['fa-' + this.icon as keyof typeof cssClasses] = true;
    return cssClasses;
  }
}
