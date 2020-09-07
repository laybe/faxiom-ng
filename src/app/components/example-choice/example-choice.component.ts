import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { choose } from '../../reducers/examples.actions';

@Component({
  selector: 'app-example-choice',
  templateUrl: './example-choice.component.html',
  styleUrls: ['./example-choice.component.scss']
})
export class ExampleChoiceComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit(): void {
  }

  select = (index: number): void => {
    this.store.dispatch(choose({ example: index }));
  }
}
