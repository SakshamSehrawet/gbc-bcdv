let gretter = (myArray,counter) => {
    const greetText = 'Hello'
    for(let index = 0; index < myArray.length; index++) {
        console.log(greetText + myArray[index])
    }
}

gretter(['Alice','Bob','Claire'],3)