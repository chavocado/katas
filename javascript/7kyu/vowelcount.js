function getCount(str) {
  //g = global so entire string; i = case insesnsitive
  var vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount === null ? 0 : vowelsCount.length;
}
