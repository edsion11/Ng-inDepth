import {Component, OnInit, ApplicationRef, ChangeDetectionStrategy} from '@angular/core';
import {EmailService} from './email.service';

interface Value{
  firstName: string;
  lastName: string;
}
@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public emailService: EmailService, private applicationRef: ApplicationRef) { }
  value: Value = {
    firstName: 'Angular',
    lastName: 'React'
  };
  element!: string;
  ngOnInit(): void {
  }
  changeElement(): void{
    this.element = 'hello';
    this.applicationRef.tick();
    console.log(document.getElementById('p1')!.innerText);
  }
  subscribe(email: string): void{
    this.emailService.subscribe(email);
  }
  changeName(): void{
    // this.value.firstName = 'Bob';
    // this.value = {
    //   firstName: 'Bob',
    //   lastName: 'mean'
    // };
    this.emailService.loadValue({
      firstName: 'Bob',
      lastName: 'mean',
    });
  }
}
