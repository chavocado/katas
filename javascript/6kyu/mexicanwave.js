function wave (text) {
    //putting the .split() inside the for loop
    let waveArr = []
  for ( let i = 0; i < text.length; i++) {
      let arr = text.split('')
      //console.log(arr)
      //if array indew is whitespace continue
      if ( arr[i] === ' ') { 
         continue
      }
      //iterating through uppercase
      arr[i] = arr[i].toUpperCase()
      console.log(arr)
      waveArr.push(arr.join(''))
  }
      return waveArr
  }
  wave ("hello")  //  ["Hello", "hEllo", "heLlo", "helLo", "hellO"])