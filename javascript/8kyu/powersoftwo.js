function powersOfTwo(n){
  var expArray = [];
  for(var i=0; i<=n; i++) {
  //Math.pow returns base to the ^exp
  expArray.push(Math.pow(2,i));
  }
  return expArray;
}
