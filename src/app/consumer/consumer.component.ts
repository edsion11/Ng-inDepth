import { Component, OnInit } from '@angular/core';
import {slides} from './data'

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {

  constructor() { }
  slides = slides.map(x => x.imgUrl);
  ngOnInit(): void {
  }

}
