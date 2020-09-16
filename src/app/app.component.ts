import { Component } from '@angular/core';
import {LoggingService} from "./logging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent {
  serverElements = [{type: 'server',
    name: 'Server name',
    content: 'content',
    comment: 'comment'}];

  constructor(private loggingService: LoggingService) {
  }

  onServerAdded(serverData: {serverName: string, serverContent: string, serverComment: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      comment: serverData.serverComment
    });
    this.loggingService.logRecord('added server');
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string, serverComment: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      comment: blueprintData.serverComment
    });
    this.loggingService.logRecord('added blueprint');
  }

}
