import {Injectable} from "@angular/core";

export class CounterService {

  activated: number = 0;
  deactivated: number = 0;

  incrementActive() {
    this.activated++;
    console.log("activated: " + this.activated);
  }

  incrementInactive() {
    this.deactivated++;
    console.log("deactivated: " + this.deactivated);
  }

}
