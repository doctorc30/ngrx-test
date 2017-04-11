import { Action } from '@ngrx/store';
import { type } from "app/util";
import { Item } from "app/models/item.model";

export const ActionTypes = {
    SHOW_AUTH: type('SHOW_AUTH'),
    SHOW_INFO: type('SHOW_INFO'),
    SHOW_REG: type('SHOW_REG'),
    SHOW_REG2: type('SHOW_REG2')
};

export class ShowAuth implements Action {
    type = ActionTypes.SHOW_AUTH;
}

export class ShowInfo implements Action {
    type = ActionTypes.SHOW_INFO;
}

export class ShowReg implements Action {
    type = ActionTypes.SHOW_REG;
}

export class ShowReg2 implements Action {
    type = ActionTypes.SHOW_REG2;
}

export type Actions
    = ShowAuth | ShowInfo | ShowReg | ShowReg2;