function removevowel(word){
  const vowels = "aeiou"
  let result = "";
  word = word.toLowerCase();

  for(letter of word){
    if (vowels.includes(letter)){
      result += " ";
    } else {
      result += letter;
    }
  }
  return result;
}