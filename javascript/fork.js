process.on('message', (message) => {
    if(message === 'disconnect'){
        process.disconnect();
        return;
    };
    console.log(`Было получено ${message}`);
    process.send('Отправлено Pong');
});