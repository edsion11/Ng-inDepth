import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab-b',
  template: `
    <button nz-button nzType="primary" nzBlock (click)="add()">Add</button>
    <app-tab-a [todo]="todo" *ngFor="let todo of todos"></app-tab-a>
  `
})
export class TabbComponent {
  todos = [{ title: 'One' }, { title: 'Two' }];
  // tslint:disable-next-line:typedef
  get runChangeDetection(){
    console.log('TabBComponent Checking');
    return true;
  }
  add() {
    this.todos.push({ title: 'four'});
    // this.todos = [...this.todos, { title: 'Three' }];;
  }
}

