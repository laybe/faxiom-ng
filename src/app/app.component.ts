import { Component } from '@angular/core';
import { PropositionUnion } from './models/proposition/proposition-union';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './reducers';
import * as fromExamples from './reducers/examples.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  proposition$: Observable<PropositionUnion>;
  hidePremises: boolean = false;
  hideConclusions: boolean = false;

  constructor(private store: Store<fromRoot.State>) {
    this.proposition$ = this.store.pipe(select(fromExamples.selectExampleChoice))
  }
}
