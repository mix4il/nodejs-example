const perf_hooks = require('perf_hooks');
const {Worker} =  require('worker_threads');

main = perf_hooks.performance.timerify(main);

const performanceObserver = new perf_hooks.PerformanceObserver((items,observer)=>{
    console.log(items.getEntries());
    observer.disconnect();
});

performanceObserver.observe({entryTypes: ['function']});

const compute = (array) =>{
    return new Promise((resolve,reject)=>{
        const worker = new Worker('./worker.js',{
            workerData:{
                array
            },
        });

        worker.on('message', (message) =>{
            console.log(worker.threadId);
            resolve(message);
        });

        worker.on('error',(err)=>{
            reject(err);
        });

        worker.on('exit', () =>{
            console.log(`Завершился поток`);
        });
    })
}

async function main (){
    try{
        let result =  await Promise.all([
            compute([24,20,30,12,44,14]),
            compute([25,20,30,12,44,14]),
            compute([24,20,35,12,44,14]),
            compute([24,25,30,12,54,12])
        ]);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

main();