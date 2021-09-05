import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {EmailService} from '../home/email.service';

interface Value{
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  firstName!: string;
  @Output()
  subscribe = new EventEmitter();
  email!: string;
  constructor(private emailService: EmailService) { }
  ngOnInit(): void {
    this.emailService.value$.subscribe(
      value => this.firstName = value.firstName
    );
  }
  subscribeEmail(email: any): void{
    // console.log(email);
    this.subscribe.emit(email);
  }
}
