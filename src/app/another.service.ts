import {LoggingService} from "./logging.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class AnotherService {

  onSomeEvent = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {
  }

  doSomething() {
    this.loggingService.logRecord("another service called!");
  }
}
