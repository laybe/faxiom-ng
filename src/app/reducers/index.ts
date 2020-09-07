import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromExamples from './examples.reducer';

export interface State {
  examples: fromExamples.State
}

export const reducers: ActionReducerMap<State> = {
  examples: fromExamples.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
