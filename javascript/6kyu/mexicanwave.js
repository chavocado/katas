// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules

//  	1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
// Example

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave (text) {
    // in this exercise we are putting the split inside of the for loop, bevause for each time we want to add the whole word )
    let finalArray = []
  for ( let i = 0; i < text.length; i++) {
      let arr = text.split('')
      //console.log(arr)
      if ( arr[i] === ' ') { // in case the element is an empty string we just skip that element and we are goig to the next one
         continue
      }
      arr[i] = arr[i].toUpperCase() // we split the word(text) every time. For the index 0, we are gonna add the whole word, then we change the current element to uppercase. ( arr[i] = arr[i].toUpperCase). The next time the for loop is gonna run for the i 1, We are goinna split the word into arr and we are gonna change the current element which is the 1 at the index 1 in capital 
      console.log(arr)
      finalArray.push(arr.join(''))// we have to change them to strings bevause they are arrays thats why we use join
  }
      return finalArray
  }
  wave ("hello")  //  ["Hello", "hEllo", "heLlo", "helLo", "hellO"])