import { Component } from '@angular/core';
import {LoggingService} from "./logging.service";
import {AnotherService} from "./another.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server',
    name: 'Server name',
    content: 'content',
    comment: 'comment'}];

  constructor(private loggingService: LoggingService, private anotherService: AnotherService) {
  }

  onServerAdded(serverData: {serverName: string, serverContent: string, serverComment: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      comment: serverData.serverComment
    });
    this.loggingService.logRecord('added server');
    this.anotherService.doSomething();
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string, serverComment: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      comment: blueprintData.serverComment
    });
    this.loggingService.logRecord('added blueprint');
    this.anotherService.doSomething();
  }

}
