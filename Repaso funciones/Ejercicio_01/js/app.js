let vowels = "aeiou";

function countvowels(word) {
  let counter = 0;
  word = word.toLowerCase();

  for (let i = 0; i <= word.length; i++) {
    const letra = word[i];
    for (let j = 0; j <= vowels.length; j ++){
      if (letra === vowels[j]){
        counter++;
        break;
      }
    }
  }
  return counter;
}
