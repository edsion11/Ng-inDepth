import {Component, OnInit, Input, Output, HostBinding, EventEmitter, ContentChild} from '@angular/core';
import { InputRefDirective } from '../input-ref/input-ref.directive';

@Component({
  selector: 'app-myinput',
  templateUrl: './myinput.component.html',
  styleUrls: ['./myinput.component.scss']
})
export class MyinputComponent implements OnInit {
  @Input() icon!: string;

  @ContentChild(InputRefDirective) input!: InputRefDirective;
  @HostBinding('class.focus')
  get focus() {
    return this.input ? this.input.focus : false;
  }

  ngOnInit(): void {
  }
}
