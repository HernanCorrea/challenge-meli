import { createAction, props } from "@ngrx/store";
import { LoadState } from "./load.state";


export const SET_LOADING = '[LOAD] Set loading';
export const setLoading = createAction(
    SET_LOADING,
  props<{
    load?: LoadState;
  }>()
);