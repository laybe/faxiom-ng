import { Component, OnInit, Input } from '@angular/core';
import { ArgumentType } from '@angular/compiler/src/core';

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
