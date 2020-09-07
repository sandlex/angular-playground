import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedMenu: string = 'recipes';

  onNavigate(selectedMenu: string) {
    this.selectedMenu = selectedMenu;
  }
}
