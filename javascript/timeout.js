const start = performance.now();
/* const timeId =  setTimeout(() => {
    console.log(performance.now() - start);
    console.log('Прошла секунда');
}, 1000);  */

const intervalId = setInterval(() =>{
    console.log(performance.now() - start);
}, 1000);

setTimeout(() =>{
    intervalId.unref();
}, 3000);

setImmediate(() =>{
    intervalId.ref();
})

console.log('После всего')