const {Worker} = require('worker_threads');
const {fork} = require('child_process');
const {performance, PerformanceObserver} = require('perf_hooks');


const performanceObserver = new PerformanceObserver((items, observer) => {
    items.getEntries().forEach((entry) =>{
        console.log(`Entry name ${entry.name}: duration ${entry.duration} ms`);
    });
});

performanceObserver.observe({entryTypes: ['measure']});

const workerFunction = (array)=>{
    return new Promise((resolve, reject)=>{
        performance.mark('Worker start');
        const worker = new Worker('./worker.js',{
            workerData: {array},
        })
        worker.on('message', (msg)=>{
            //console.log('WorkerID  is ', worker.threadId);
            performance.mark('Worker end');
            performance.measure('Worker','Worker start','Worker end')
            resolve(msg)
        });
        worker.on('error', reject);
        worker.on('exit',()=>{
            console.log('Worker end.')
        })
    });
}

//workerFunction = performance.timerify(workerFunction);

const forkFunction = (array)=>{
    return new Promise((resolve, reject)=>{
        performance.mark('Fork start');
        const forkProcess = fork('./fork.js');
        forkProcess.send({array});

        forkProcess.on('message',(msg)=>{
            performance.mark('Fork end');
            performance.measure('Fork','Fork start','Fork end')
            resolve(msg);
        });
        forkProcess.on('exit',()=>{
            console.log('Process end');
        });
        forkProcess.on('error', reject);
    });
}



//forkFunction = performance.timerify(forkFunction);

const main = async ()=>{
    await workerFunction([12,123,213,123,22]);
    await forkFunction([12,123,213,123,22]);
}

main();