/* 
-фазы
-инициализация 
//nexTick, microtaskQueue
1.Таймеры
//nexTick, microtaskQueue
2.pending,callback
//nexTick, microtaskQueue
3.idle,prepare
//nexTick, microtaskQueue
4.poll
//nexTick, microtaskQueue
5.check
//nexTick, microtaskQueue
6.close callback
 */

const fs = require('fs');

console.log('init');

setTimeout(() => {
    console.log(performance.now(),  'Timer 0');
},100)

setImmediate(() => {
    console.log('Immediate')
})

fs.readFile(__filename, () => {
    console.log('Файл считан');
})

console.log('End')