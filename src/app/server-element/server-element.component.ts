import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [LoggingService]
})
export class ServerElementComponent implements OnInit, AfterContentInit {

  @ContentChild('dataElement', {static: true}) dataElement: ElementRef;

  @Input('serverElement') element: {
    type: string,
    name: string,
    content: string,
    comment: string
  };

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.loggingService.logRecord(this.dataElement.nativeElement.textContent);
  }

}
