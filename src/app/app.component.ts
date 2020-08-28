import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ticks: number[] = [];

  onTick(value: number) {
    this.ticks.push(value);
  }

}
