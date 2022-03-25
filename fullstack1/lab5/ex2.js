const events = require('event');
const wallet = require('./ex1/module/wallet')
const eventEmitter = new events.EventEmitter();

const fn = () => {
    console.log('Call me!')
}

eventEmitter.on('call',fn)
eventEmitter.emit('call')