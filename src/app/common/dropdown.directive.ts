import {Directive, HostBinding, HostListener} from '@angular/core';
/**
 * Created by Akhtar on 23/Jan/19.
 */

@Directive({
  selector: '[appDropdown]'
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
