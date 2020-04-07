import axios from 'axios'

export const inital_base_url = 'http://velixar.ru';

const api = axios.create({
    baseURL: inital_base_url + '/api/getdb/',

})

export const menuNorm = () => {
    return (dispatch) => {
        api.get('menu.php')
            .then((res) => dispatch({ type: 'MENU_NORM', payload: res }))
    }
}

export const imgSlider = () => {
    return (dispatch) => {
        api.get('imgslider.php')
            .then((res) => dispatch({ type: 'IMG_SLIDER', payload: res }))

    }
}

export const array_obj = (arr) => {
    let new_arr = [];
    // eslint-disable-next-line
    for (const key in arr) {
        if (arr.hasOwnProperty(key)) {
            new_arr[key] = arr[key];

        }
    }
    return new_arr;
} 