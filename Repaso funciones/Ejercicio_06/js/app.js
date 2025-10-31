const encrypt13 = (string) => {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (const char of string) {
    const isUpper = upper.includes(char);
    const alphabet = isUpper ? upper : lower;
    const idx = alphabet.indexOf(char);

    if (idx === -1) {
      result += char;
    } else {
      const newIdx = (idx + 13) % 26;
      result += alphabet[newIdx];
    }
  }

  return result;
};