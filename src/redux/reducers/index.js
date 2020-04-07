import { combineReducers } from 'redux';
import { array_obj, inital_base_url } from '../actions';

const base_url = (state = inital_base_url) => {
    return state;
}

const winWidth = ()=>{
    return window.innerWidth;
}

const search = (state = false, action) => {
    switch (action.type) {
        case 'SEAR_TRUE':
            return state = true;
        case 'SEAR_FALSE':
            return state = false;
        default:
            return state;
    }
};
const exchange = (state = false, action) => {
    switch (action.type) {
        case 'EXCHANGE_TRUE':
            return state = true;
        case 'EXCHANGE_FALSE':
            return state = false;
        default:
            return state;
    }
};
const menu = (state = [{}], action) => {
    switch (action.type) {
        case 'MENU_NORM':
            return state = array_obj(action.payload.data);
        default:
            return state
    }
}

const slider = (state = [], action = undefined) => {
    switch (action.type) {
        case 'IMG_SLIDER':
            let arr = [];
            // eslint-disable-next-line no-unused-vars
            for (const key in action.payload.data) {
                if (action.payload.data.hasOwnProperty(key)) {
                    const element = action.payload.data[key];
                    arr[key] = element;
                }
            }

            return state = arr;

        default:
            return state
    }
}

export const descriptPosition = (state = { x: '', y: '', p: '', o: '' }, action) => {
    if (action.type === 'DESCRIPT') {
        let h;
        action.o.map((x) =>
            (x.id === action.p) ?
                h = x.titl
                : ''
        )
        return state = { ...state, x: action.x, y: action.y, p: action.p, o: h }
    } else {
        return state;
    }
}
export const reducerApp = combineReducers({
    search,
    exchange,
    menu,
    slider,
    descriptPosition,
    base_url,
    winWidth

})