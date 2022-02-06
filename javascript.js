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
/* 
const sleep = ms => new Promise((resolve) => {
    setTimeout(() => resolve(),ms);
});

sleep(2000).then(() => {
    console.log('After 2 sec.');
    return sleep(3000);
}).then(() => {console.log('After 3 sec.')});; */

/* const person = Object.create({},{
    name:{
        value: 'Mihail',
        enumerable: true,
        configurable: true,
        writable: true
    },
    fullname:{
        value: 'Baskakov',
        enumerable: true,
    },
    age:{
        value:12,
        enumerable: true,
    }
})

for(let key in person){
    console.log('Key', key, person[key]);
} 

console.log(person) */

/* const delay = ms => {return new Promise((resolve ) => setTimeout(resolve, ms))};

const url = 'https://jsonplaceholder.typicode.com/todos'; */

/* 
function fetchTodos (url){
    return delay(2000)
    .then(() => fetch(url))
    .then((res) => res.json());
}; */

/* async function fetchTodos(url){
    console.log('Fetch todos ...');
    try{
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }catch(e){
        console.error(e);
    }
    fetchTodos(url)
} */

/* fetchTodos(url)
    .then(data => console.log(data))
    .catch((err) => console.log(err.message)); */

const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (target, prop) => (prop in target && !prop.startsWith(prefix)),
        ownKeys: (target) => Reflect.ownKeys(target).filter(p => !p.startsWith(prefix)),
        get: (target, prop, receiver) => (prop in receiver) ? target[prop] : undefined,
    });
}

const person = withHiddenProps({name: 'John', age: 22, _id: '123'});


const users = [
    {id: 1, name: 'John', job:'Fullstack'},
    {id: 22, name: 'Mike', job:'Miner'},
    {id: 31, name: 'Lena', job:'FAsff'},
    {id: 4, name: 'Niko', job:'Gamer'}
];

const IndexedArray = new Proxy(Array,{
    construct(target, [args]){
        const index = {};
        args.forEach(item => index[item.id] = item);

        return new Proxy(new target(...args),{
            get(target,prop){
                switch(prop){
                    case 'push':{
                        return item =>{
                            index[item.id] = item;
                            target[prop].call(target, item);
                        }
                    }
                    case 'findById':{
                        return id => index[id];
                    }
                    default: return target[prop];
                }
            }
        });
    }
});

const arrayIndex = new IndexedArray([
    {id: 1, name: 'John', job:'Fullstack'},
    {id: 22, name: 'Mike', job:'Miner'},
    {id: 31, name: 'Lena', job:'FAsff'},
    {id: 4, name: 'Niko', job:'Gamer'}
]);


const emptyObj = () =>
 new Proxy({},
   {
     get: (target, key, receiver) => (
           Reflect.has(target, key) ||
           Reflect.set(target, key, emptyObj()),
           Reflect.get(target, key, receiver)
     )
   }
 )
;
const path = emptyObj();

path.to.virtual.node.in.empty.object = 123;

console.log(path.to.virtual.node.in.empty.object);






