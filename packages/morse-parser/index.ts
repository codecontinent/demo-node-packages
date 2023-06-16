import { codes } from './morse-codes'

export function decodeLetter(code: string): string {
  return codes[code]
}

export function decodeWord(code: string): string {
  let word = ''
  code.split(/\s/i).map((chunk) => (word += decodeLetter(chunk)))
  return word
}

export function decode(code: string): string {
  let decodedMessage = ''
  let notFirstWord = false
  code.split(/\s\s\s/i).forEach((chunk) => {
    if (notFirstWord) {
      decodedMessage += ' '
    } else {
      notFirstWord = true
    }
    decodedMessage += decodeWord(chunk)
  })
  return decodedMessage
}
