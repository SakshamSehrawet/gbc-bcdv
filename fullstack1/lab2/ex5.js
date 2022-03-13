function buildArray(num) {
    let myArray =[]
    for (let i = 0; i < num; i++) 
      {myArray.push(i)}
    return myArray
  }
  
  console.log(buildArray(5))