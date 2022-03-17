const say = require('say');
say.stop()
//say.speak("Thanks! Cheers!",'Alex',0.4)

const sorryDave = () => {
    say.speak("I'm sorry, Dave");
}
setTimeout(sorryDave,5000);