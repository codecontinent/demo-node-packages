import { decode, decodeWord, decodeLetter } from '@cc/morse-parser'
import { codes } from '@cc/morse-parser/morse-codes'

describe('Unit tests for Morse code parser', () => {
  test('should return the length of codes 26', () => {
    expect(Object.values(codes).length).toEqual(26)
  })

  test('should return letter from morse code', () => {
    expect(decodeLetter('.-')).toEqual(codes['.-'])
    expect(decodeLetter('.-')).toEqual('A')
  })

  test('should return word from morse code', () => {
    expect(decodeWord('-- .- .... .- -... ..- -...')).toEqual('MAHABUB')
  })

  test('should return long text from morse code', () => {
    expect(decode('-- -.--   -. .- -- .')).toEqual('MY NAME')
  })
})
