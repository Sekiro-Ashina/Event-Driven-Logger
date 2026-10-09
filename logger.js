const fs = require('node:fs');
const os = require('node:os');

const EventEmitters = require('node:events'); //this is a class

class logger extends EventEmitters{
    log(message){
        this.emit('message', {message});
    }
}

const logger = new logger();
