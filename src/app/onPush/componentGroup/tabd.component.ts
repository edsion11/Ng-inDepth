import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab-d',
  template: `
    <div *ngFor="let todo of todos">
        <p style="padding: 10px;background-color: antiquewhite;margin: 2px;">{{todo.title}} - {{runChangeDetection}}</p>
    </div>
  `
})
export class TabdComponent {
  @Input() todos;
  get runChangeDetection(){
    console.log('TabDComponent Checking');
    return true;
  }
  constructor() { }
}
