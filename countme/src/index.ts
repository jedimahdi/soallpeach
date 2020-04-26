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
  sum += parseInt(newNumberStr)

  res.send(newNumberStr)
})

app.get('/count', (req, res) => {
  res.send(String(sum))
})

app.listen(80, () => {})
