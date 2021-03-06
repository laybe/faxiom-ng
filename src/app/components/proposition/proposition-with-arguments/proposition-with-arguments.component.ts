import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { PropositionUnion } from 'src/app/models/proposition/proposition-union';
import { PropositionTypeguardService } from 'src/app/services/proposition-typeguard.service';
import { SingleProposition } from 'src/app/models/proposition/single-proposition';

@Component({
  selector: 'app-proposition-with-arguments',
  templateUrl: './proposition-with-arguments.component.html',
  styleUrls: ['./proposition-with-arguments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropositionWithArgumentsComponent implements OnInit, OnChanges {

  @Input()
  proposition: PropositionUnion;

  @Input()
  hide: boolean = false;

  isSingleProposition: boolean;
  singleProposition: SingleProposition;

  // @Input()
  // hidePremises: boolean = false;

  // @Input()
  // hideConclusions: boolean = false;

  constructor(private propositionTypeGuard: PropositionTypeguardService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isSingleProposition = this.propositionTypeGuard.isSingleProposition(this.proposition);
    if (this.propositionTypeGuard.isSingleProposition(this.proposition)) {
      this.singleProposition = this.proposition;
    }
  }
}
