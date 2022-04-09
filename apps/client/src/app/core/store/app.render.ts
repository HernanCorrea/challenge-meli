import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { ItemReducer } from "./item/item.reducer";
import { ITEM_STATE_NAME } from "./item/item.state";

export const renderState: ActionReducerMap<AppState> = {
    [ITEM_STATE_NAME]: ItemReducer, 
    router: routerReducer
  };
  