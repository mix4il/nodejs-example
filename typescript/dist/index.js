"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    ;
    sayHello() {
        return 'Dog says hello!';
    }
}
class Fish {
    constructor(name) {
        this.name = name;
    }
    ;
    dive(howDeep) {
        return `Diving ${howDeep} feet`;
    }
}
function talkToPet(pet) {
    let talk = '';
    if (pet instanceof Fish) {
        talk = pet.dive(10);
    }
    else {
        talk = pet.sayHello();
    }
    return talk;
}
const myDog = new Dog("Sammy");
const myFish = new Fish("Dory");
console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
})(Direction || (Direction = {}));
function moveTo(direction) {
    switch (direction) {
        case Direction.Left:
            return 1;
        case Direction.Right:
            return -1;
    }
};
console.log(moveTo(Direction.Right));
