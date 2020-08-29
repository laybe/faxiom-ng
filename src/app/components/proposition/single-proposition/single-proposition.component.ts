import { Component, OnInit, Input } from '@angular/core';
import { SingleProposition } from '../../../models/proposition/single-proposition';

@Component({
  selector: 'app-single-proposition',
  templateUrl: './single-proposition.component.html',
  styleUrls: ['./single-proposition.component.scss']
})
export class SinglePropositionComponent implements OnInit {

  @Input()
  proposition: SingleProposition;

  constructor() {}

  ngOnInit(): void {
  }

}
