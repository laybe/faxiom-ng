import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hideable',
  templateUrl: './hideable.component.html',
  styleUrls: ['./hideable.component.scss']
})
export class HideableComponent implements OnInit {

  @Input()
  buttonOnTheRight: boolean = false;

  @Input()
  hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick = () => {
    this.hide = !this.hide;
  }

}
