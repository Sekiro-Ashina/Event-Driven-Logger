const fs = require('node:fs');
const os = require('node:os');

const EventEmitters = require('node:events'); //this is a class

class Logger extends EventEmitters{
    log(message){
        this.emit('message', {message});
    }
}

const logger = new Logger(); //class name and instance name should be different
const logFile = './eventlog.txt';

const logToFile = (event) =>{ //explain: this is the one whose writing all messga into the file so wehenver the message emmits it grabs it and write into the logFile.
    const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
    fs.appendFileSync(logFile, logMessage);
}

logger.on('message', logToFile); //this is the one listening, and the message is important cause there can be many event happening like mssgsent,mssgreceive, we want to listen a specific one. and while listening call the logToFile which will catch those event and perform the task.

// so someone is there whose ready to listen the emmiters, but there is no one whose emitting those till now.

