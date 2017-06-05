function findOutlier(integers){
  var oddnums = [];
  var evennums = [];

  for(var i =0; i<integers.length; i++){
    if ((integers[i] % 2) == 0){
      evennums.push(integers[i]);
    } else {
       oddnums.push(integers[i]);
    }
  }

  if (evennums.length > oddnums.length){
      return oddnums[0];
  } else {
      return evennums[0];
