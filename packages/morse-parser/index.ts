import { codes } from "./morse-codes";

export function decode_letter(code: string): string {
  return codes[code];
}

export function decode_word(code: string): string {
  let word: string = "";
  code.split(/\s/i).map((chunk) => (word += decode_letter(chunk)));
  return word;
}

export function decode(code: string): string {
  let decodedMessage: string = "",
    notFirstWord = false;
  code.split(/\s\s\s/i).map((chunk) => {
    if (notFirstWord) {
      decodedMessage += " ";
    } else {
      notFirstWord = true;
    }
    decodedMessage += decode_word(chunk);
  });
  return decodedMessage;
}
