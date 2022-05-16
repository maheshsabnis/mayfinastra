import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({ selector: '[highlight]' })
/**
 * Set backgroundColor for the attached element to highlight color
 * and set the element's customProperty to true
 */
export class HighlightDirective implements OnChanges {

  // default color for the element
  defaultColor =  'rgb(211, 211, 211)'; // lightgray

  // property that is mapped with the selector
  // where the directive selector is used , this property will changed
  @Input('highlight') bgColor = '';

  // injected with ElementRef to refer the DOM element
  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }

  // when the DOM element is applied with the directive, the ngOnChanges will be
  // invoked
  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }
}
