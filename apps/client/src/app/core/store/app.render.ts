import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { ItemReducer } from "./item/item.reducer";
import { ITEM_STATE_NAME } from "./item/item.state";
import { LoadReducer } from "./load/load.reducer";
import { LOAD_STATE_NAME } from "./load/load.state";

export const renderState: ActionReducerMap<AppState> = {
    [ITEM_STATE_NAME]: ItemReducer, 
    [LOAD_STATE_NAME]: LoadReducer, 
    router: routerReducer
  };
  