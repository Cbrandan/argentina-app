import {url_api} from '../constants/api_url';

const getUrlProvByCity = prv =>{
    return `${url_api}provincias?id=${prv}`;
}

export default getUrlProvByCity;