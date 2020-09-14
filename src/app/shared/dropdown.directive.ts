import {Directive, ElementRef, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective {

  @HostBinding('class.open') expanded: boolean = false;

  @HostListener('document:click', ['$event']) toggleExpanded(event: Event) {
    this.expanded = this.elRef.nativeElement.contains(event.target) ? !this.expanded : false;
  }

  constructor(private elRef: ElementRef) {
  }

}
