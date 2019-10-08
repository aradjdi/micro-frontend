import 'child-vue-app';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-app';

  childData = 'init child component';

  onDataChanged({ detail }) {
    console.log('main-app, output event receive from child app : ', detail);
  }
}
