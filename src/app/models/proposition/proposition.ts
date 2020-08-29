import type { PropositionType } from "./proposition-type";
import type { ConnectedProposition } from "./connected-proposition";
import type { Argument } from "../argument/Argument";

export interface Proposition {
    id: string;
    type: PropositionType;
    conclusionsArguments?: Argument[];
    partOfConnections?: ConnectedProposition[];
}
