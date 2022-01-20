#!/usr/bin/env node
import {printSuccess, printError, printHelp} from './services/log.service.js'
import { getArgs } from './helper/args.js';
import { saveKeyValue, getKey } from './services/storage.service.js';

const saveToken = async (token)=>{
    try{
        await saveKeyValue('token', token);
        printSuccess('Token saved');
    }catch(e){
        printError(e.message);
    }
}

const initProgram = () =>{
    const args = getArgs(process.argv);
    console.log(args);
    if(args.h){
        printHelp();
    }
    if(args.s){
        printSuccess(args.s); 
    }
    if(args.t){
        return saveToken(args.t);
    }
}

initProgram();