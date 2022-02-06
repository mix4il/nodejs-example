class Dog {
    constructor(readonly name: string){};

    sayHello(): string {
        return 'Dog says hello!';
    }
}

class Fish {
    constructor(readonly name: string){};

    dive(howDeep:number): string {
        return `Diving ${howDeep} feet`;
    }
}

type Pet = Dog | Fish;

function talkToPet(pet :Pet):string {
    let talk:string = '';

    if(pet instanceof Fish){
        talk = pet.dive(10);
    }else{
        talk = pet.sayHello();
    }

    return talk;
}


const myDog = new Dog("Sammy");
const myFish = new Fish("Dory");

console.log(talkToPet(myDog));
console.log(talkToPet(myFish));


enum Direction {
    Left,
    Right
}

function moveTo(direction: Direction):number{
    switch(direction){
        case Direction.Left:
            return 1;
        case Direction.Right:
            return -1;
    }
};

console.log(moveTo(Direction.Left));


