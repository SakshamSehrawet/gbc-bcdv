const validInput = (x) => {
    if (Number.isInteger(x)) {
        return true
    }
    else {
        throw new Error('Only Integers Allowed')
    }
}
const mulitplyTwoNumbers = (x,y) => {
    if (validInput(x) && validInput(y)) {
        return x*y
    }
    else {
        throw new Error('Only Integers Allowed')
    }
}
const evenDoubler = (x) => {
    if (validInput(x)) {
        return x%2 == 0 ? x*x : 0;
    }
}

module.exports = {mulitplyTwoNumbers,evenDoubler}