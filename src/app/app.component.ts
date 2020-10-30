import { Component } from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {

  constructor(private usersService: UsersService) {
  }

  onSetToInactive(id: number) {
    this.usersService.deactivateUser(id);
    console.log('onSetToInactive');
  }

  onSetToActive(id: number) {
    this.usersService.activateUser(id);
    console.log('onSetToActive');
  }

}
