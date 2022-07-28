import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMoveElement]',
})
export class MoveElementDirective {
  #up: boolean = false;
  #down: boolean = false;
  #right: boolean = false;
  #left: boolean = false;
  setInterva: any;
  counter: number = 0;

  counter2: number = 0;

  constructor(element: ElementRef) {
    this.setInterva = setInterval(() => this.movElement(element), 10);
    element.nativeElement.style.position = 'absolute';

    element.nativeElement.style.top = '0px';
    element.nativeElement.style.left = '0px';
    element.nativeElement.style.bottom = '0px';
    element.nativeElement.style.right = '0px';
  }
  @HostListener('window: keydown', ['$event'])
  userPressOnKey(e: KeyboardEvent): void {
    if (e.code === 'ArrowUp') this.#up = true;
    if (e.code === 'ArrowDown') this.#down = true;
    if (e.code === 'ArrowRight') this.#right = true;
    if (e.code === 'ArrowLeft') this.#left = true;
  }
  @HostListener('window: keyup', ['$event'])
  userReleaseKeyUp(e: KeyboardEvent): void {
    if (e.code === 'ArrowUp') this.#up = false;
    if (e.code === 'ArrowDown') this.#down = false;
    if (e.code === 'ArrowRight') this.#right = false;
    if (e.code === 'ArrowLeft') this.#left = false;
  }
  movElement(element: ElementRef) {
    if (this.#up === true) {
      element.nativeElement.style.top = this.counter-- + 'px';
      console.log(this.counter);
      if (this.counter === 0) this.counter++;
      if (this.counter2 === 0) this.counter2++;
      return;
    }

    if (this.#down === true) {
      element.nativeElement.style.top = this.counter++ + 'px';
      console.log(this.counter);

      if (this.counter === 540) this.counter--;
      if (this.counter2 === 1000) this.counter2--;
      return;
    }

    if (this.#right === true) {
      element.nativeElement.style.left = this.counter2++ + 'px';

      if (this.counter === 500) this.counter--;
      if (this.counter2 === 1200) this.counter2--;
      return;
    }
    if (this.#left === true) {
      element.nativeElement.style.left = this.counter2-- + 'px';
      if (this.counter === 0) this.counter++;
      if (this.counter2 === 0) this.counter2++;
      return;
    }

    element.nativeElement.style.left = this.counter2++ + 'px';
    element.nativeElement.style.top = this.counter++ + 'px';
    if (this.counter === 540) this.counter = 0;
    if (this.counter2 === 1250) this.counter2 = 0;
  }
}
