import axios from 'axios'

export const inital_base_url = 'http://velixar.project';

const api = axios.create({
    baseURL: inital_base_url + '/api/getdb/',

})

export function getImage(a, d) {
    api.get('imgslider.php?a=' + 0 + '&b=' + a)
      .then(function (response) {
        d({ data: response.data, status: response.status });

      })
  }

export function getImageCount(c) {
    api.get('paginationcount.php')
      .then(function (response) {
        c({ data: response.data, status: response.status });

      })
  }




export const array_obj = (arr) => {
    let new_arr = [];
    // eslint-disable-next-line
    for (const key in arr) {
      
            new_arr[key-1] = arr[key];

        
    }
    return new_arr;
}

export function getRandomArbitrary(min, max) {
    let m = Math.random() * (max - min) + min;
    return Math.round(m);
}