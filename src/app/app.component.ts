import { Component } from '@angular/core';

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

  onServerAdded(serverData: {serverName: string, serverContent: string, serverComment: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      comment: serverData.serverComment
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string, serverComment: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      comment: blueprintData.serverComment
    });
  }

}
