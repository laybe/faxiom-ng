import { Component, OnInit, Input } from '@angular/core';
import { ArgumentType } from '../../../models/argument-type';

@Component({
  selector: 'app-argument-arrow',
  templateUrl: './argument-arrow.component.html',
  styleUrls: ['./argument-arrow.component.scss']
})
export class ArgumentArrowComponent implements OnInit {

  @Input()
  type: ArgumentType;

  constructor() { }

  ngOnInit(): void {
  }

}
