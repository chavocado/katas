function duplicateCount(text){
  //empty holding array
  var arr = [];
  //duplicate holding array
  var duplicate = [];
  //loop through param length
  for(var i=0; i<text.length; i++) {
    var lowerText = text[i].toLowerCase();
    if(arr.indexOf(lowerText)<0) arr.push(lowerText);
    else if(duplicate.indexOf(lowerText)<0) duplicate.push(lowerText);
  }
  return duplicate.length;
}
