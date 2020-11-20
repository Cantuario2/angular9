import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cantuario2Blue]'
})
export class BlueDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#0099ff';
  }
}
