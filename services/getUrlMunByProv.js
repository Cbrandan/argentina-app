import {url_api} from '../constants/api_url';
import  {regMax} from '../constants/constants';

const getUrlMunByProv = prv =>{
    return `${url_api}municipios?provincia=${prv}&campos=id,nombre&max=${regMax}`;
}

export default getUrlMunByProv;