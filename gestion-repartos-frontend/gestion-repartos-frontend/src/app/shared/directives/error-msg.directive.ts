import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;
  @Input() set valido( valor: boolean ){
    if( valor === true ){
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private el:ElementRef<HTMLElement> ) {
    this.htmlElement = el;
   }

  ngOnInit(): void {
    this.setColor();
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = 'red';
  }
}
