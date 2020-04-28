import http from 'http'

const sendResponse = (
  response: any,
  data: string,
  statusCode: number,
  headers: any,
) => {
  response.writeHead(statusCode, headers)
  response.end(data)
}

const collectData = (request: any, callback: any) => {
  let data = ''
  request.on('data', (chunk: any) => {
    data += chunk
  })
  request.on('end', () => {
    callback(data)
  })
}

let sum = 0

const server = http.createServer((req, res) => {
  const url = req.url

  if (url === '/') {
    collectData(req, (data: any) => {
      sum += parseInt(data, 10)
      sendResponse(res, data, 200, {'Content-Type': 'text/plain'})
    })
  } else if (url === '/count') {
    sendResponse(res, `${sum}`, 200, {'Content-Type': 'text/plain'})
  }
})

server.listen(80)
