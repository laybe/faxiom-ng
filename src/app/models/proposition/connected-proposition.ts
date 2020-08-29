import type { Proposition } from "./Proposition";
import type { PropositionType } from "./proposition-type";
import type { PropositionUnion } from "./proposition-union";
import type { ConnectionType } from "./connection-type";

export interface ConnectedProposition extends Proposition {
  type: PropositionType.CONNECTION;
  connectionType: ConnectionType;
  connectedPropositions: PropositionUnion[];
}
