import chalk from 'chalk';

const printError = (err)=>{
    console.log(chalk.bgRed('ERROR: ') + err);
};

const printSuccess = (message)=>{
    console.log(chalk.bgGreen('Success: ') + message);
};

const printHelp = ()=>{
    console.log(deleteSpace(`${chalk.bgCyan('HELP')}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `));
};

const deleteSpace = (str) =>{
    return str.split('\n').map(line => line.trim()).join('\n');
};

export {printSuccess, printHelp,  printError};
