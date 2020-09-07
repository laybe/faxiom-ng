import { Action, createReducer, on } from '@ngrx/store';
import { choose } from './examples.actions';
import PropositionJson from '../mock/proposition.json';
import PropositionJson2 from '../mock/proposition2.json';
import { PropositionUnion } from '../models/proposition/proposition-union';

export interface State {
  examples: PropositionUnion[];
  choice: number;
}

export const initialState: State = {
  examples: [
    PropositionJson as PropositionUnion,
    PropositionJson2 as PropositionUnion
  ],
  choice: 0
};

const examplesReducer = createReducer(
  initialState,
  on(choose, (state, { example }) => ({ ...state, choice: example }))
);

export function reducer(state: State | undefined, action: Action) {
  return examplesReducer(state, action);
}
