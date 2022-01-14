const { fork } = require('child_process');

const forkProcess = fork('fork.js');

forkProcess.on('message', (data) => {
    console.log(data);
});

forkProcess.on('close', (err) =>{
    console.log(err);
})

forkProcess.send('Ping');