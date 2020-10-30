import {LoggingService} from "./logging.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AnotherService {

  constructor(private loggingService: LoggingService) {
  }

  doSomething() {
    this.loggingService.logRecord("another service called!");
  }
}
