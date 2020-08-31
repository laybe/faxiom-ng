import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { ConnectedProposition } from 'src/app/models/proposition/connected-proposition';

@Component({
  selector: 'app-connected-proposition',
  templateUrl: './connected-proposition.component.html',
  styleUrls: ['./connected-proposition.component.scss']
})
export class ConnectedPropositionComponent implements OnInit {

  @Input()
  proposition: ConnectedProposition;

  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
