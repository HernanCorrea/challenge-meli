import { CategoryI, ItemI } from '../../interfaces';

interface ListState {
  categories: CategoryI[];
  items: ItemI[];
  hasData: boolean;
}

export enum ListReducerTypes {
  SET_PARAMS,
}
interface ListAction {
  type: ListReducerTypes;
  payload: any;
}
export const ListReducer = (state: ListState, action: ListAction) => {
  const { type, payload } = action;
  switch (type) {
    case ListReducerTypes.SET_PARAMS:
      return {
        ...state,
        items: payload.items,
        categories: payload.categories,
        hasData: payload.hasData,
      };
    default:
      throw new Error();
  }
};

export const listInitialState = {
  categories: [],
  items: [],
  hasData: true,
};
