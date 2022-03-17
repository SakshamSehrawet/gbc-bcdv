const moment = require('moment');
const getCurrentDate = () =>{
    let wrapped = moment(new Date())
    console.log(wrapped.format('dddd, MMM Do YYYY : hh:mm:ss a'));
}
getCurrentDate();