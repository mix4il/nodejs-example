/* const crypto =  require('crypto');
const https = require('https');
const start  = performance.now();

process.env.UV_THREADPOOL_SIZE = 4;

for(let i = 0; i < 50; i++) {
    crypto.pbkdf2('test','salt',100000,64,'sha512',()=>{
        console.log(performance.now() - start);
    });
};


for(let i = 0; i < 50; i++) {
    https.get('https://yandex.ru',(res) => {
        res.on('data',()=>{});
        res.on('end',()=>{
            console.log(performance.now() - start);
        })
    })
}; */

const perf_hooks = require('perf_hooks');
test = perf_hooks.performance.timerify(test);

const performanceObserver = new perf_hooks.PerformanceObserver((items,observer) => {
    console.log(items.getEntries());
    const entry =  items.getEntriesByName('slow_test').pop();
    console.log(`${entry.name}: ${entry.duration} ms`);
    observer.disconnect();
});

performanceObserver.observe({entryTypes: ['function','measure']});

function test() {
    let arr = [];
    for (let i = 0; i < 100000000; i++) {
        arr.push(i * i);
    }
}


function slow_test() {
    performance.mark('start');
    let arr = [];
    for (let i = 0; i < 100000000; i++) {
        arr.push(i * i);
    }
    performance.mark('end');
    performance.measure('slow_test','start','end');
}

slow_test();
test();
