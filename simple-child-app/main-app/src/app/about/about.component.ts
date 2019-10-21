import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  childData = 'init child component';

  onDataChanged({ detail }) {
    console.log('main-app, output event receive from child app : ', detail);
  }
}