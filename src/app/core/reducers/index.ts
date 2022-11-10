// NGRX
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { errorsReducer } from './error-state/error-state.reducer';
import { uiReducer } from './ui-state/ui-state.reducer';


// tslint:disable-next-line:no-empty-interface
export interface AppState { }

export const reducers: ActionReducerMap<AppState> = { ui: uiReducer, router: routerReducer, errorState: errorsReducer };

export const metaReducers: MetaReducer<AppState>[] = []
