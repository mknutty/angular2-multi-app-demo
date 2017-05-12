import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app workz  !';
  constructor(@Inject('AppName') public appName: string) {
    console.log(appName);
  }
}
