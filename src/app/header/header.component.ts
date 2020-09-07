import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedMenu = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(selectedMenu: string) {
    this.selectedMenu.emit(selectedMenu);
  }
}
