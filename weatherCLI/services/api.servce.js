import https from 'https';
import { url } from 'inspector';
import axios from 'axios';
import {getKey, TOKEN_DICTIONARY} from './storage.service.js';

const getWeather = async (city)=>{
    const token = await getKey(TOKEN_DICTIONARY.token);
    if(!token) {
        throw new Error('Нет токена');
    }
   /*  const url =  new URL('https://api.openweathermap.org/data/2.5/weather');
    url.searchParams.append('q', city);
    url.searchParams.append('appid', token);
    url.searchParams.append('lang', 'ru');
    url.searchParams.append('units','metric'); */

    /* https.get(url, response => {
        let res = '';

        response.on('data', (chunk) => res += chunk);
        
        response.on('end', () => console.log(res));
    }); */

    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
        params: {
            q:city,
            appid:token,
            units:'metric',
        }
    });
    return data;
}; 

export {getWeather};