import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges, OnChanges } from '@angular/core';
import { PropositionUnion } from 'src/app/models/proposition/proposition-union';
import { PropositionTypeguardService} from 'src/app/services/proposition-typeguard.service';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropositionComponent implements OnInit, OnChanges {

  @Input()
  proposition: PropositionUnion;
  isSingleProposition: boolean;
  isConnectedProposition: boolean;

  constructor(private propositionTypeGuard: PropositionTypeguardService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isSingleProposition = this.propositionTypeGuard.isSingleProposition(this.proposition);
    this.isConnectedProposition = this.propositionTypeGuard.isConnectedProposition(this.proposition);
  }

}
