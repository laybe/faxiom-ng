import { Component } from '@angular/core';
import { SingleProposition } from './single-proposition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  proposition: SingleProposition;

  constructor() {
    this.proposition = { text: 'test'};
  }
}
