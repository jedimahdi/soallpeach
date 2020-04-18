function sqrt(n: number): number {
  return Math.floor(Math.sqrt(n)) + 1
}

export function isPrime(n: number): boolean {
  if (n === 2) {
    return true
  }
  if (n % 2 === 0) {
    return false
  }
  for (let i = 3; i < sqrt(n); i += 2) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

// function isPrimeR(n: number, i: number): boolean {
//   if (i >= sqrt(n)) {
//     return true
//   }
//   if (n % i === 0) {
//     return false
//   }

//   return isPrimeR(n, i + 2)
// }

// export function isPrime(n: number): boolean {
//   if (n === 2) {
//     return true
//   }
//   if (n % 2 === 0) {
//     return false
//   }
//   return isPrimeR(n, 3)
// }
