function helloWorlds(n) {
    if(Number(n))
    {
      for (let i = 0; i < n; i++) 
      {console.log('Hello World')}
    }
    else{
      console.log('Goodbye World')
    }
  }
helloWorlds(5)
helloWorlds('sup')