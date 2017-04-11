import * as layout from '../actions/layout.actions';

export interface State {
    showAuth: boolean,
    showInfo: boolean,
    showReg: boolean,
    showReg2: boolean
};

const initialState : State = {
    showAuth: false,
    showInfo: false,
    showReg: false,
    showReg2: false
};

export const  layoutReducer = (state : State = initialState, action: layout.Actions): State => {
    switch (action.type) {
        case layout.ActionTypes.SHOW_AUTH: {
            return Object.assign({}, state, {
                showAuth: true
            });
        }
        case layout.ActionTypes.SHOW_INFO: {
            return Object.assign({}, state, {
                showInfo: true
            });
        }
        case layout.ActionTypes.SHOW_REG: {
            return Object.assign({}, state, {
                showReg: true
            });
        }
        case layout.ActionTypes.SHOW_REG2: {
            return Object.assign({}, state, {
                showReg2: true
            });
        }
        default: {
            return state;
        }
    }
}
