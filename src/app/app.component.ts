import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private username: string = '';
  private displayDetails: boolean;
  private logs: LogItem[] = [];

  onDetailsClick() {
    this.displayDetails = !this.displayDetails;
    let index = this.logs.length + 1;
    this.logs.push(new LogItem(index, index >= 5 ? 'blue' : 'white'));
  }

}

class LogItem {
  private index: number;
  private color: string;
  private date: Date;

  constructor(index: number, color: string) {
    this.index = index;
    this.color = color;
    this.date = new Date();
  }

  getIndex(): number {
    return this.index;
  }

  getColor(): string {
    return this.color;
  }

  getDate(): Date {
    return this.date;
  }
}
