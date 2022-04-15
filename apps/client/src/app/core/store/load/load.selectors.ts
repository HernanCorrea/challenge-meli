import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadState, LOAD_STATE_NAME } from './load.state';

const selectLoadState = createFeatureSelector<LoadState>(LOAD_STATE_NAME);

export const getLoad = createSelector(
    selectLoadState,
  (load: LoadState) => load
);
