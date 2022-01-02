const {characters, stealRing} = require('./character.js');

stealRing(characters, "Фродо");

for(const character of characters){
    console.log(character);
}