import { Injectable } from '@angular/core';
import type { ConnectedProposition } from "../models/proposition/connected-proposition";
import { PropositionType } from "../models/proposition/proposition-type";
import type { PropositionUnion } from "../models/proposition/proposition-union";
import type { SingleProposition } from "../models/proposition/single-proposition";

@Injectable({
  providedIn: 'root'
})
export class PropositionTypeguardService {

  constructor() { }

  isSingleProposition = (proposition: PropositionUnion): proposition is SingleProposition => {
    return proposition && proposition.type === PropositionType.SINGLE;
  }

  isConnectedProposition = (proposition: PropositionUnion): proposition is ConnectedProposition => {
    return proposition && proposition.type === PropositionType.CONNECTION;
  }

}
