import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {

  @Output() tick = new EventEmitter<number>();
  private tickValue: number = 0;
  private timer;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.onGameStop();
  }

  onGameStart() {
    this.timer = setInterval(() => {
      this.tick.emit(++this.tickValue);
    }, 1000);
  }

  onGameStop() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
