# http

- 引入http模块
```html
const http = require('http');
```

- 创建服务
```html
const server = http.createServer((req, res) => {
    // 写入状态码
    req.statusCode = 200;
    // 设置响应头
    res.setHeader('Content-Type', 'text/plain');
    
    // 向前端返回数据 
    res.write('a');
    
    // 结束响应并向前端返回数据
    res.end('Hello World\n');
});
```

- 监听端口
```html
const port = 3000; // 端口号
const hostname = '127.0.0.1'; // 域名

server.listen(port, hostname, () => {
    // 在命令行打印运行结果
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

- 启动node服务器
```html
node http.js
```

- 浏览器运行
```html
http://127.0.0.1:3000
```
