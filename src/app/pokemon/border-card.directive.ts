import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

 private initialColor: string = '#000000';
 private defaultColor: string = '#f5f5f5';
 private defaultHeight: number = 180;

 constructor(private el: ElementRef) {
   this.setHeight(180);
   this.setColor('#f5f5f5');
 }
  
  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  private setColor(color: string) {
    this.el.nativeElement.style.color = `solid 20px ${color}`
  } 

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.initialColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.defaultColor);
  }

  private setBorder(color: string) {
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border; 
  }
 
}
