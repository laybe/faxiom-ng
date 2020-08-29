import { Component, OnInit } from '@angular/core';
import { PropositionUnion } from './models/proposition/proposition-union';
import PropositionJson from './mock/proposition.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  proposition: PropositionUnion;
  hidePremises: boolean = false;
  hideConclusions: boolean = false;

  constructor() {
    this.proposition = PropositionJson as PropositionUnion;
  }
}
