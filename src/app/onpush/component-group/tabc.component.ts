import { Component, Input, NgZone, ApplicationRef, ChangeDetectorRef} from '@angular/core';
// import { ɵmarkDirty as markDirty, ɵdetectChanges as detectChanges} from '@angular/core';
@Component({
  selector: 'app-tab-c',
  template: `
    <app-tab-d [todos]="todos" ></app-tab-d>
  `
})
export class TabcComponent {
  todos = [{ title: 'One' }, { title: 'Two' }];
  // tslint:disable-next-line:typedef
  get runChangeDetection(){
    console.log('TabcComponent Checking');
    return true;
  }
  public count = 0
  constructor(private app: ApplicationRef, private zone: NgZone, private cdr: ChangeDetectorRef) {
    let s = setInterval(() => {
      this.cdr.detach();
     this.count++;
     if(this.count==5){
       clearInterval(s)
     }
      this.todos .push({title: 'New'});
      this.cdr.detectChanges()
    }, 1000);
  }
}

