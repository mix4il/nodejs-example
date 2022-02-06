#!/usr/bin/env node
import {printSuccess, printError, printHelp, printWeather} from './services/log.service.js'
import { getArgs } from './helper/args.js';
import { saveKeyValue, getKey, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather } from './services/api.servce.js';

const saveToken = async (token)=>{
    if(!token.length){
        printError('Не ввели токен');
        return;
    }
    try{
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token saved');
    }catch(e){
        printError(e.message);
    }
}

const saveCity = async (city)=>{
    if(!city.length){
        printError('Не ввели город');
        return;
    }
    try{
        await getWeather(city);
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('City saved');
    }catch(e){
        if(e?.response?.status === 404)
            printError('Неверный город');
        else printError(e.message);
    }
}

const getForcast = async ()=>{
    try{
        const city = await getKey(TOKEN_DICTIONARY.city);
        const weather = await getWeather(city);
       printWeather(weather, );
    }catch(e){
        if(e?.response?.status == 404){
            printError('Неверный город');
        }else if(e?.response?.status == 401){
            printError('Неверный токен');
        }else {
            console.log(e.message);
        }
    }
}

const initProgram = () =>{
    const args = getArgs(process.argv);
    //console.log(args);
    if(args.h){
        return printHelp();
    }
    if(args.s){
        return saveCity(args.s);
    }
    if(args.t){
        return saveToken(args.t);
    }
    return getForcast();
}

initProgram()