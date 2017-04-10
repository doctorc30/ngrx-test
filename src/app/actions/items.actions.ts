import { Action } from '@ngrx/store';
import { type } from "app/util";
import { Item } from "app/models/item.model";

export const ActionTypes = {
    ADD: type('item ADD'),
    REMOVE: type('item REMOVE'),
    SELECT: type('item SELECT')
};

export class AddItem implements Action {
    type = ActionTypes.ADD;

    constructor(public payload: Item) { }
}

export class RemoveItem implements Action {
    type = ActionTypes.REMOVE;

    constructor(public payload: Item) { }
}

export class SelectItem implements Action {
    type = ActionTypes.SELECT;

    constructor(public payload: Item) { }
}

export type Actions
    = AddItem | RemoveItem | SelectItem;