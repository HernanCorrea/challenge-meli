import { createReducer, on } from "@ngrx/store";
import { setLoading } from "./load.actions";
import { initialStateLoad, LoadState } from "./load.state";

export const LoadReducer = createReducer(
    initialStateLoad,
    on(setLoading, (state: LoadState, {load}) => {
      return {
        ...state,
        ...load
      };
    }),
);