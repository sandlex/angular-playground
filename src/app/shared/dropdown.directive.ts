import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective {

  @HostBinding('class.open') expanded: boolean = false;

  @HostListener('click') toggleExpanded() {
    this.expanded = !this.expanded;
  }

}
