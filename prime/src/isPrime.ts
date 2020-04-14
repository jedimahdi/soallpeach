function sqrt(n: number): number {
  return Math.floor(Math.sqrt(n)) + 1
}

export function isPrime(n: number): boolean {
  for (let i = 2; i < sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
