import axios from 'axios'

export const inital_base_url = 'http://velixar.project';

const api = axios.create({
    baseURL: inital_base_url + '/api/getdb/',

})

<<<<<<< HEAD
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



=======
export function getMenu(m) {
  api.get(inital_base_url + '/api/getdb/menu.php')
    .then(function (response) {
      m({ data: response.data, status: response.status });
       
    })
}

export function getImage(d) {
    api.get('imgslider.php')
      .then(function (response) {
        d({ data: response.data, status: response.status });

      })
  }

  export function getMoiRaboti(a, d) {
    api.get('moi-raboti.php?a='+ 0 + '&b='+ a)
      .then(function (response) {
        d({ data: response.data, status: response.status });

      })
  }
  export function getMoiFoto(a, f) {
    api.get('moi-foto.php?c='+ 0 + '&d='+ a)
      .then(function (response) {
        f({ data: response.data, status: response.status });

      })
  }

export function getImageCount(c) {
    api.get('paginationcount.php')
      .then(function (response) {
        c({ data: response.data, status: response.status });

      })
  }

  export function getMyworkCountStep(c) {
    api.get('myworkcount.php')
      .then(function (response) {
        c({ data: response.data, status: response.status });
>>>>>>> f32fc0c0e0130ee08e0a7e32a11b52c5ab9dc931

      })
  }

  export function getMyFotoCountStep(c) {
    api.get('myfotocount.php')
      .then(function (response) {
        c({ data: response.data, status: response.status });

      })
  }

  export function getContact(c, contact) {
    api.get('contact.php?contact=' + contact)
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
<<<<<<< HEAD
=======
}

export function convertStrNum(a) {
  a = Number(a);
  return a;
>>>>>>> f32fc0c0e0130ee08e0a7e32a11b52c5ab9dc931
}