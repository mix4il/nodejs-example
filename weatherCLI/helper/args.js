
const getArgs = (args) =>{
    const res ={};
    const [executor, file, ...rest] = args;
    rest.forEach((value, index, array) =>{
        if(value.charAt(0) === '-'){
            const nextElement = array[index + 1];
            const argument = value.substring(1);
            if(nextElement){
                res[argument] = (nextElement.charAt(0) != '-')  ? nextElement : true;
            }else{
                res[argument] = true;
            }
        }
    })
    return res;
}

export {getArgs};