import {AfterViewInit, Component, Inject, Input} from '@angular/core';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private Document: Document) { }
  @Input() slides!: string[];
  slidePositions!: number[];
  currentIndex = 0;
  slide(direction: number): void{
    this.currentIndex += direction;
    if (this.currentIndex < 0){
      this.currentIndex = this.slidePositions.length - 1;
    }
    if (this.currentIndex > this.slidePositions.length){
      this.currentIndex = 0;
    }
    this.Document.querySelector('.slider')!.scrollTo({
      left: this.slidePositions[this.currentIndex],
      behavior: 'smooth'
    });
  }
  private getSlidePosition(): void {
     this.slidePositions = [];
     this.Document.querySelectorAll('.slide').forEach((div: Element) => {
        this.slidePositions.push((div as HTMLElement).offsetLeft);
     });
  }
  ngAfterViewInit(): void {
    this.getSlidePosition();
  }

}
