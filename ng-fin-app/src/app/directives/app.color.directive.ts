import {Directive,Input ,HostListener, ElementRef, Renderer2} from '@angular/core';
@Directive({
  selector: '[setColor]'
})
export class ColorDirective{
  // 1. Public property decorated with @Input and will map with the selector
  // when the data is passed to selector, the Input property will accept the data
  @Input('setColor')setColor:string;

  // 2. Inject ElementRef and Renderer2 as Constructor injector
  // ElementRef and Renderer2 are resolved by BrowserModule
  constructor(private ele:ElementRef, private renderer:Renderer2){
    this.setColor = '';
  }

  // 3. logic
  private applyColor(color:string):void {
     this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', color);
  }

  // 4. Event Methods

  @HostListener('mouseenter')
  onmouseenter():void{
    this.applyColor(this.setColor || 'magenta');
  }
  @HostListener('mouseleave')
  onmouseleave():void{
    this.applyColor('');
  }
}
