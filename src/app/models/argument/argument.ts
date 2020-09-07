import type { SingleProposition } from "../proposition/single-proposition";
import type { PropositionUnion } from "../proposition/proposition-union";
import type { ArgumentType } from "./argument-type";

export interface Argument {
  id: string;
  type: ArgumentType;
  premise?: PropositionUnion;
  conclusion?: SingleProposition;
}
