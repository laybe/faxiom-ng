import { Component, OnInit, Input } from '@angular/core';
import { Argument } from 'src/app/models/argument/Argument';

@Component({
  selector: 'app-arguments-list',
  templateUrl: './arguments-list.component.html',
  styleUrls: ['./arguments-list.component.scss']
})
export class ArgumentsListComponent implements OnInit {

  @Input()
  showConclusions: boolean = false;

  @Input()
  argumentsList: Argument[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
