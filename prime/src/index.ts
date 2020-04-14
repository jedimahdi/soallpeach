import fs from 'fs'
import {isPrime} from './isPrime'

const filePath = process.argv[2]

const output = fs
  .readFileSync(filePath, {encoding: 'utf8'})
  .split('\n')
  .map(x => parseInt(x))
  .map(isPrime)
  .map(x => (x ? '1' : '0'))
  .join('\n')

process.stdout.write(output)
