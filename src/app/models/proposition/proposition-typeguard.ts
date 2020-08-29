import type { PropositionUnion } from "./proposition-union";
import type { SingleProposition } from "./single-proposition";
import { PropositionType } from "./proposition-type";
import type { ConnectedProposition } from "./connected-proposition";

export const isSingleProposition = (proposition: PropositionUnion): proposition is SingleProposition => {
  return proposition && proposition.type === PropositionType.SINGLE;
}

export const isConnectedProposition = (proposition: PropositionUnion): proposition is ConnectedProposition => {
  return proposition && proposition.type === PropositionType.CONNECTION;
}
