function findShort(s){
    //split separates by a param. param being space, then sort function by length  
    let array = s.split(" ").sort((a, b) => a.length - b.length);
      return array[0].length
    }