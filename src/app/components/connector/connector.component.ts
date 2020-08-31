import { Component, Input, OnInit } from '@angular/core';
import { ConnectionType } from '../../models/proposition/connection-type';

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.scss']
})
export class ConnectorComponent implements OnInit {

  @Input()
  type: ConnectionType;

  constructor() { }

  ngOnInit(): void {
  }

}
