function emptyArray(myArray) {
    for (let i = 0; i < myArray.length; i++) 
      {myArray.pop()}
    myArray.pop()
    return myArray
  }
  
  console.log(emptyArray([2,2,3]))