import fs from 'fs'
import {isPrime} from './isPrime'
import {compose, parse, toOneZero} from './utils'

const main = (): void => {
  const filePath = process.argv[2] || 'input'

  const output = fs
    .readFileSync(filePath, {encoding: 'utf8'})
    .split('\n')
    .map(compose(toOneZero, isPrime, parse))
    .join('\n')

  process.stdout.write(output)
}

main()
