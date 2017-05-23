function getCount(str) {
  //g = global so entire string; i = case insesnsitive
  var vowelsCount = str.match(/[aeiou]/gi);
  //ternary condition if vowelsCount === null the value will be 0 or the length
  return vowelsCount === null ? 0 : vowelsCount.length;
}
