import { Component, OnInit, Input } from '@angular/core';
import { Argument } from 'src/app/models/argument/Argument';

@Component({
  selector: 'app-argument',
  templateUrl: './argument.component.html',
  styleUrls: ['./argument.component.scss']
})
export class ArgumentComponent implements OnInit {

  @Input()
  showConclusions: boolean;
  @Input()
  argument: Argument;

  constructor() { }

  ngOnInit(): void {
  }

}
