import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<div><router-outlet></router-outlet></div>'
})
export class AppComponent {
  title = 'forms';
}
