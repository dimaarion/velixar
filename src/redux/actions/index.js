import axios from 'axios'

const api = axios.create({
    baseURL:'http://velixar/api/getdb/',
    
})

export const menuNorm = ()=>{
    return (dispatch) =>{
        api.get('menu.php')
        .then((res)=>dispatch({type:'MENU_NORM',payload:res}))
    } 
}

export const imgSlider = () => {
    return (dispatch) =>{    
        api.get('imgslider.php')
        .then((res)=>dispatch({type:'IMG_SLIDER',payload:res}))
      
    } 
}

export const array_obj = (arr) => {
    let new_arr = [];
    for (const key in arr) {
        if (arr.hasOwnProperty(key)) {
            new_arr[key] = arr[key];
            
        }
    }
    return new_arr;
} 