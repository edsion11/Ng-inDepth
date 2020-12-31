import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab-a',
  template: `
        <p style="padding: 10px;background-color: antiquewhite;margin: 2px;">{{todo.title}} - {{runChangeDetection}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabaComponent {
  @Input() todo;
  // tslint:disable-next-line:typedef
  get runChangeDetection(){
    console.log('TabAComponent Checking');
    return true;
  }
  constructor() { }
}
