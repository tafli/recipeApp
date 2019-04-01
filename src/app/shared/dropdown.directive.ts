import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') showDropdown = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') toggleOpen() {
    this.toggle();
  }

  @HostListener('mouseleave') toggleClose() {
    this.close();
  }

  private toggle() {
    if (!this.showDropdown) {
      this.open();
    } else {
      this.close();
    }
  }

  private open() {
    const menu = this.elRef.nativeElement.querySelector('.dropdown-menu');
    this.renderer.addClass(menu, 'show');
    this.showDropdown = true;
  }

  private close() {
    const menu = this.elRef.nativeElement.querySelector('.dropdown-menu');
    this.renderer.removeClass(menu, 'show');
    this.showDropdown = false;
  }
}
