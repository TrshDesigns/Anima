function correctparentheses(string) {
  let balance = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === "(") {
      balance += 1;
    } else if (char === ")") {
      balance -= 1;
    } else {
      console.log("the character " + char + " its not a parenthesis");
    }
    if (balance < 0){
      return false;
    }
  }
  return true
}
