const fs = require('node:fs');
const os = require('node:os');

const EventEmitters = require('node:events'); //even is a class

class Logger extends EventEmitters{
    log(message){
        this.emit('message', {message});
    }
}

const logger = new Logger(); //class name and instance name should be different
const logFile = './eventlog.txt';

const logToFile = (event) =>{
    const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
    fs.appendFileSync(logFile, logMessage);
}

logger.on('message', logToFile); //this is the one listening, and the message is important cause there can be many event happening like mssgsent,mssgreceive, we want to listen a specific one. and while listening call the logToFile which will catch those event and perform the task.

// so someone is there whose ready to listen the emmiters, but there is no one whose emitting those till now.

setInterval( ()=>{ 
    const memoryUsage = (1 - os.freemem() / os.totalmem()) * 100;
    logger.log(`Current Memory used: ${memoryUsage.toFixed(2)}`); 
}, 3000); 