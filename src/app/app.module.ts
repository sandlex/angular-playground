import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import {BasicHighlightDirective} from "./basic-highlight/basic-highlight.directive";
import {BetterHighlightDirective} from "./better-highlight/better-highlight.directive";
import {UnlessDirective} from "./unless/unless.directive";
import {LoggingService} from "./logging.service";
import {AnotherService} from "./another.service";

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [LoggingService, AnotherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
