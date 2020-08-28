import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, AfterContentInit {

  @ContentChild('dataElement', {static: true}) dataElement: ElementRef;

  @Input('serverElement') element: {
    type: string,
    name: string,
    content: string,
    comment: string
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log(this.dataElement.nativeElement.textContent);
  }

}
