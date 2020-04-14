import {isPrime} from '../isPrime'

test('check isPrime function', () => {
  expect(isPrime(2)).toBe(true)
  expect(isPrime(3)).toBe(true)
  expect(isPrime(7)).toBe(true)
  expect(isPrime(4)).toBe(false)
  expect(isPrime(9)).toBe(false)
})
