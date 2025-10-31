function findOddNumber(array) {
  const count = {};

  for (let num of array) {
    console.log(count);
    count[num] = (count[num] || 0) + 1;
  }
    
  for (let num in count) {
    if (count[num] % 2 === 1) {
      return Number(num);
    }
  }
}