function array_diff(a, b) {
  for(var i = 0; i<a.length; ){
    if(b.indexOf(a[i])>-1){
      a.splice(i,1);
    }else{
      i++;
    }
  }
  return a;
}
