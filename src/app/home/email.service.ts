import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
interface Value{
  firstName: string;
  lastName: string;
}
const ANONYMOUS_VALUE: Value = {
  firstName: '',
  lastName: ''
};
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private subject = new BehaviorSubject<Value>(ANONYMOUS_VALUE);
  constructor() { }
  value$: Observable<Value> = this.subject.asObservable();
  loadValue(value: Value): void{
    this.subject.next(value);
  }
  subscribe(email): void{
    console.log('emit!', email);
  }
}
