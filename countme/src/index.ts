import express from 'express'
import bodyParser from 'body-parser'

const app = express()

let sum = 0

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/', (req, res) => {
  let newNumberStr = '0'
  if (typeof req.body === 'string') {
    newNumberStr = req.body
  }

  if (typeof req.body === 'object') {
    newNumberStr = Object.keys(req.body)[0]
  }

  const n = parseInt(newNumberStr, 10)

  if (isNaN(n)) {
    return res.sendStatus(400)
  }
  sum += n

  res.sendStatus(200)
})

app.get('/count', (req, res) => {
  res.status(200).send(`${sum}`)
})

app.listen(80, () => {})
