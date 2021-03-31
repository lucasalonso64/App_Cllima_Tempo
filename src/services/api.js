import  axios from 'axios';

//https://api.hgbrasil.com/weather?key=ec30acb2&lat=-23.682&lon=-46.875

export const key =  'aa679190'  //'ec30acb2'
const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;