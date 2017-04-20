import * as layout from '../actions/layout.actions';

export interface LayoutState {
    showAuth: boolean;
    showInfo: boolean;
    showReg: boolean;
    showReg2: boolean;
};

const initialState : LayoutState = {
    showAuth: false,
    showInfo: false,
    showReg: false,
    showReg2: false
};

export function  layoutReducer (state : LayoutState = initialState, action: layout.Actions): LayoutState {
    switch (action.type) {
        case layout.ActionTypes.SHOW_AUTH: {
            return Object.assign({}, initialState, {
                showAuth: true
            });
        }
        case layout.ActionTypes.SHOW_INFO: {
            return Object.assign({}, initialState, {
                showInfo: true
            });
        }
        case layout.ActionTypes.SHOW_REG: {
            return Object.assign({}, initialState, {
                showReg: true
            });
        }
        case layout.ActionTypes.SHOW_REG2: {
            return Object.assign({}, initialState, {
                showReg2: true
            });
        }
        default: {
            return state;
        }
    }
}
