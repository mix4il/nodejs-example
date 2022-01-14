/* function hello(){
    console.log(this);
}

const user ={
    name: 'John',
    surname: 'Fuck',
    hide: hello.bind(window),
    loginfo:  function(){
        console.log(this.name);
        console.log(this.surname);
    }
}

const lena ={
    name: 'Lena',
    surname: 'Baskakova'
}

const arrayTest =  [1, 2, 3, 4, 5, 6, 7, 8, 9];

function multByNum (n){
    return this.map(function(i){
        return i * n;
    });
};

Array.prototype.multByNum = multByNum;
console.log(arrayTest.multByNum(5));

user.loginfo.bind(lena)();

function incrementNum(n){
    return function (num){
        return n + num;
    }
}

const functionTest = incrementNum(10);
console.log(functionTest(5)); */


/* 

function logPerson (){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'John', age:20,job: 'Frontend'};
const person2 = {name: 'Michal', age:21,job: 'Full-stack'};

function bind(context, fn){
    return function(...args){
        fn.apply(context, args);
    }
}

bind(person1, logPerson)();
bind(person2, logPerson)();


const p1 = new Promise((resolve, reject) => {
    console.log('start');
    setTimeout(function(){
        console.log('Pending data');
        const backendData = {
            server:'aws',
            port: 5000,
            status: 200,
        };
        resolve(backendData);
    },2000);
});

p1.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data.modified = false;
            if(data.modified === true){
                reject(data)
            }
            else{
                resolve(data);
            }
        },2000);
    })
}).then((clientData) => {
    console.log('Received client data',clientData);
    clientData.err = 400;
    return clientData;
}).then((changeData) => {
    console.log('End', changeData);
}).catch((err) => {console.error('Error: ', err);})
.finally(() => {console.log('finally')}); */

const sleep = ms => new Promise((resolve) => {
    setTimeout(() => resolve(),ms);
});

sleep(2000).then(() => {
    console.log('After 2 sec.');
    return sleep(3000);
}).then(() => {console.log('After 3 sec.')});;

