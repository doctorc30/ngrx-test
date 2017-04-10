import * as items from '../actions/items.actions';
import { Item } from "app/models/item.model";

export interface State {
    select: Item,
    items: Item[]
};

const initialState = {
    select: Item,
    items: []
};

export function reducer(state = initialState, action: items.Actions): State {
    switch (action.type) {
        case items.ActionTypes.ADD: {
            return Object.assign({}, state, {
                items: [...state.items, action.payload]
            });
        }
        case items.ActionTypes.REMOVE: {
            const item = action.payload;

            if (state.items.indexOf(item) > -1) {
                return state;
            }

            return Object.assign({}, state, {
                items: [...state.items, action.payload]
            });
        }
        case items.ActionTypes.SELECT: {
            return Object.assign({}, state, {
                select: action.payload
            });
        }
        default: {
            return state;
        }
    }
}
