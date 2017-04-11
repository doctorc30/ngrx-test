import * as fromItems from './items.reducer'
import * as fromLayout from './layout.reducer'

export const reducers = {
  items: fromItems.itemsReducer,
  layout: fromLayout.layoutReducer
};

export const getItems = reducers => reducers.items.items;
export const getSelect = reducers => reducers.items.select;
export const getLayout = reducers => reducers.layout;