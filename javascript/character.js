let  characters = [
    {name: 'Бильбо', haveRing : false},
    {name: 'Фродо', haveRing : false},
];

function stealRing(characters, owner) {
    characters.map((c)=>{
        if(c.name === owner){
            c.haveRing = true
        }else{
            c.haveRing = false;
        }
    })
}

module.exports = {characters, stealRing};