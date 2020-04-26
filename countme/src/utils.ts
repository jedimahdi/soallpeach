export const compose = <T1, T2, T3, T4>(
  f: (x: T3) => T4,
  g: (x: T2) => T3,
  h: (x: T1) => T2,
) => (x: T1) => f(g(h(x)))

export const parse = (x: string) => parseInt(x)

export const toOneZero = (isTrue: boolean) => (isTrue ? '1' : '0')
