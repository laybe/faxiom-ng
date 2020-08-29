import type { Proposition } from "./Proposition";
import type { PropositionType } from "./proposition-type";
import type { Argument } from "../argument/Argument";

export interface SingleProposition extends Proposition {
  type: PropositionType.SINGLE;
  text: string;
  premisesArguments?: Argument[];
}
