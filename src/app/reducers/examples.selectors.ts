import { createSelector } from '@ngrx/store';
import { State } from './index';
import { PropositionUnion } from '../models/proposition/proposition-union';

export const selectExamples = (state: State) => state.examples.examples;
export const selectChoice = (state: State) => state.examples.choice;

export const selectExampleChoice = createSelector(
  selectExamples,
  selectChoice,
  (examples: PropositionUnion[], choice: number) => {
    return examples[choice];
  }
);
