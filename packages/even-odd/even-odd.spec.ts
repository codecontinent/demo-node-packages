import { isEven, isOdd } from '@cc/even-odd'

describe('Unit test for Even-Odd functions', () => {
  test('should detect the even numbers: isEven()', () => {
    expect(isEven(0)).toBe(true)
    expect(isEven(1)).toBe(false)
    expect(isEven(2)).toBe(true)
  })

  test('should detect the odd numbers: isOdd()', () => {
    expect(isOdd(0)).toBe(false)
    expect(isOdd(1)).toBe(true)
    expect(isOdd(2)).toBe(false)
  })
})
