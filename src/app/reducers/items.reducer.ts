import * as items from '../actions/items.actions';
import { Item } from "app/models/item.model";

export interface State {
    select: Item,
    items: Item[]
};

const initialState = {
    select: {
        name: ''
    },
    items: []
};

export const  itemsReducer = (state : State = initialState, action: items.Actions): State => {
    switch (action.type) {
        case items.ActionTypes.ADD: {
            return Object.assign({}, state, {
                items: [...state.items, action.payload]
            });
        }
        case items.ActionTypes.REMOVE: {
            return Object.assign({}, state, {
                items: state.items.filter((item)=>item != action.payload)
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

export const getItems = (state: State) => state.items;
export const getSelect = (state: State) => state.select;