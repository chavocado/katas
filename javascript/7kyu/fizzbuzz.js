function fizzbuzz(n)
{
  const fbArray = [];
  for(let i = 1; i <= n; i++ ){
    if(i % 15 == 0){
      fbArray.push('FizzBuzz')
    } else if (i % 3 == 0){
      fbArray.push('Fizz')
    } else if (i % 5 == 0){
      fbArray.push('Buzz')
    } else {
      fbArray.push(i)
    }
  }
  return fbArray
}