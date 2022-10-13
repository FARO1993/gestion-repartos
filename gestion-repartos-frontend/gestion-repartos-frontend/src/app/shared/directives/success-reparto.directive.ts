import { Directive, ElementRef, OnInit, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[success-reparto]'
})
export class SuccessRepartoDirective implements OnInit, OnChanges{

  htmlElement: ElementRef<HTMLElement>;

  /*@Input() set valido( valor: boolean ){
    console.log(valor)
    if( valor === true ){
      this.htmlElement.nativeElement.children[0].children[0].classList.add('reparto-message-info-success')
    }
  }*/

  constructor( private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
   }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    
  }


}
