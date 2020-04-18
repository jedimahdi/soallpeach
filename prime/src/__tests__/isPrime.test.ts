import {isPrime} from '../isPrime'

test('check isPrime function works fine!', () => {
  expect(isPrime(2)).toBe(true)
  expect(isPrime(3)).toBe(true)
  expect(isPrime(7)).toBe(true)
  expect(isPrime(97)).toBe(true)
  expect(isPrime(4)).toBe(false)
  expect(isPrime(9)).toBe(false)
  expect(isPrime(49)).toBe(false)
  expect(isPrime(121)).toBe(false)
})
