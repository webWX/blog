
const http = require('http');
const childProcess = require('child_process');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   req.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    // 在命令行打印运行结果
    console.log(`Server running at http://${hostname}:${port}/`);
    // 使用默认浏览器打开地址
    childProcess.exec(`start http://${hostname}:${port}/`);
});
