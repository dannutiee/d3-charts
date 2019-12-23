import { ALPHABET } from "./alphabet";

export const countLetterOcurences = string => {
  const preparedData = {};

  for (let character in ALPHABET) {
    let char = ALPHABET[character];

    const charReg = new RegExp(char, "g");
    preparedData[char] = (string.match(charReg) || []).length;
  }

  return preparedData;
};
