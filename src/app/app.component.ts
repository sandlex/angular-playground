import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private username: string = '';
  private displayDetails: boolean;
  private logs: Date[] = [];

  onDetailsClick() {
    this.displayDetails = !this.displayDetails;
    this.logs.push(new Date());
  }

}
