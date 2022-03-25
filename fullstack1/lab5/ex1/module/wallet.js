const SHA256 = require("crypto-js/sha256")
const events = require('events');
const eventEmitter = new events.EventEmitter();

module.exports = {
    getAddress : () => {
        const rand = Math.random(1000)
        const address = SHA256(rand)
        console.log(`Wallet address is ${address}`)
    },
    depositAmount : (num) => {
        let balance 
        balance+=num;
        eventEmitter.emit('deposited');
        console.log(`Amount: ${num} deposited. curr balance is ${balance}`)
    }
}
eventEmitter.on('deposited',() => {console.log('Transaction Received')})