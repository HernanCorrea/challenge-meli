export const LOAD_STATE_NAME = 'load';

export interface LoadState {
  isLoading: boolean;
  type: string | null;
}

export const initialStateLoad: LoadState = {
  isLoading: false,
  type: null,
};
