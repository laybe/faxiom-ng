import { createAction, props } from '@ngrx/store';

export const choose = createAction('[Examples Component] Choose', props<{ example: number }>());
