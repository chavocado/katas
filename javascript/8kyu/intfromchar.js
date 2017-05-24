function getAge(inputString){
// pattern match number range globally
  return parseInt(inputString.match(/[0-9]/g).pop());

}
