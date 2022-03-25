
const emitter = require('events').EventEmitter;

const LoopProcessor =  (num) => {
    var e = new emitter();
    
    setTimeout(function () {
        
        for (var i = 1; i <= num; i++) {
            console.log('Round ' + i);
            e.emit('Ping', i);
        }
    }
    , 2000)
    return e;
}
const lp = LoopProcessor(3);

lp.on('Ping',function (data) {
    console.log('ping..');
    lp.emit('Pong', data)
});

lp.on('Pong', function (data) {
    console.log('pong..');
    //lp.once('Ping', data)
});

console.log('game completed...')
