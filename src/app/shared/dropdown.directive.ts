import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') showDropdown = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') toggleOpen() {
    this.showDropdown = !this.showDropdown;
    const menu = this.elRef.nativeElement.querySelector('.dropdown-menu');

    if(this.showDropdown) {
      this.renderer.addClass(menu, 'show');
    } else {
      this.renderer.removeClass(menu, 'show');
    }
  }
}
