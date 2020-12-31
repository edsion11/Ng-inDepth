import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appInputRef]'
})
export class InputRefDirective {

  constructor() { }
  focus = false;

  @HostListener('focus')
  // tslint:disable-next-line:typedef
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  // tslint:disable-next-line:typedef
  onBlur() {
    this.focus = false;
  }
}
