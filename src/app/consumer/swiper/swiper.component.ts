import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements AfterViewInit {


  @Input() slides: string[];
  slidePositions: number[];
  currentIndex = 0;
  slide(direction: number): void{
    this.currentIndex += direction;
    if (this.currentIndex < 0){
      this.currentIndex = this.slidePositions.length - 1;
    }
    if (this.currentIndex > this.slidePositions.length){
      this.currentIndex = 0;
    }
    this.Document.querySelector('.slider').scrollTo({
      left: this.slidePositions[this.currentIndex],
      behavior: 'smooth'
    });
  }
  constructor(@Inject(DOCUMENT) private Document: Document) { }
  private getSlidePosition(): void {
     this.slidePositions = [];
     this.Document.querySelectorAll('.slide').forEach((div: HTMLElement) => {
        this.slidePositions.push(div.offsetLeft);
     });
  }
  ngAfterViewInit(): void {
    this.getSlidePosition();
  }

}
