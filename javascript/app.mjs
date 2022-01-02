async function main(){
    try{
        const {characters, stealRing} = await  import('./character.mjs');
        for(const character of characters){
            stealRing(character);
        }
    }
    catch(err){
        console.log("Ошибка");
    }
}

main();