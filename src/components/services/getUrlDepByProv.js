import {url_api} from '../constants/api_url';
import  {regMax} from '../constants/constants';

const getUrlDepByProv = prv =>{
    return `${url_api}departamentos?provincia=${prv}&max=${regMax}`;
}

export default getUrlDepByProv;