import * as fromItems from './items.reducer'
import * as fromLayout from './layout.reducer'
import { State } from "./items.reducer";
import { createSelector } from 'reselect';

export const reducers = {
  itemsState: fromItems.itemsReducer,
  layoutState: fromLayout.layoutReducer
};

export const getItemsState = reducers => reducers.itemsState;
export const getLayoutState = reducers => reducers.layoutState;

export const getItems = createSelector(getItemsState, fromItems.getItems);
export const getSelect = createSelector(getItemsState, fromItems.getSelect);