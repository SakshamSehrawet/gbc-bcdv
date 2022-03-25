// get the reference of EventEmitter class of events module
const events = require('events');

//create an object of EventEmitter class by using above reference


const playGame = (x) => {
    const em = new events.EventEmitter();
    let i = 1
    em.on('ping',() => {
        if(i<=x){
            console.log('Round' + i)
            console.log('ping..')
            setTimeout(()=> em.emit('pong'),500)
        }else {
            console.log('Game Completed')
        }
    })
    em.on('pong',() => {
        if(i<=x){
            console.log('pong..')
            setTimeout(()=> em.emit('ping'),500)
            i++
        }else {
            console.log('Game Completed')
        }
    })
    em.emit('ping')
}

playGame(5)
