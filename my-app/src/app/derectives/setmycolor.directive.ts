import { Directive } from '@angular/core';

@Directive({
  selector: '[setmycolor]'
})
export class SetmycolorDirective {

  constructor(private element:ElementRef) { 
  	element.nativeElement.style.Color = 'yellow';
  }

}
