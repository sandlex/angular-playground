import { Component} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<div class="warning">This is a warning message!</div>',
  styles: ['.warning { color: orange }']
})
export class WarningAlertComponent {
}
