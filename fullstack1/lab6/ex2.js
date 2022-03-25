let counter = 10;
let countdown = setInterval(function(){
    console.log(counter);

    counter--;
    if(counter === 0) {
        console.log('time is up!')
        clearInterval(countdown);
    }
}, 1000);
