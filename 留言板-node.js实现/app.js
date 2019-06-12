var http = require('http');
var fs = require('fs');
var Url = require('url');
var artTemplate = require('art-template');

var comments = [
  {
    name: '魏超',
    message: '今天天气不错！',
    dateTime: '2019-05-16'
  },
  {
    name: '建英',
    message: '我和魏超一样！',
    dateTime: '2019-05-16'
  }
];

http.createServer((req, res) => {
  //使用parse()方法,把访问的路径转化为一个对象
  var urlObject = Url.parse(req.url, true);//注意这里添加一个true参数以后，会使得路径上面携带的参数对象化
  //取对象中属性名为pathname的值，也就是不包含查询字符串的路径部分（该路径不包含 ? 之后的内容），因为有些req.url会带上客户端传递过来的参数
  var url = urlObject.pathname;
  if (url === '/') {
    fs.readFile('./views/index.html', (err, data) => {
      if (err) {
        return res.end('404 Not Found !')
      }
      //var htmlData = artTemplate.render(data.toString(), comments)
      var htmlStr = artTemplate.render(data.toString(), {
        comments: comments
      })
      res.end(htmlStr)
    })
  }
  else if (url === '/post') {
    fs.readFile('./views/post.html', (err, data) => {
      if (err) {
        return res.end('404 Not Found !')
      }
      res.end(data)
    })
  }
  else if (url.indexOf('/public/') === 0) {
    fs.readFile('.' + url, (err, data) => {
      if (err) {
        return res.end('404 Not Found !')
      }
      res.end(data)
    })
  }
  else if (url === '/pinglun') {
    //得到表单提交的数据
    var common = urlObject.query;
    common.dateTime = '2019-05-16';
    comments.unshift(common);
    //跳转页面
    // 如何通过服务器让客户端重定向？
    //    1. 状态码设置为 302 临时重定向
    //        statusCode
    //    2. 在响应头中通过 Location 告诉客户端往哪儿重定向
    //        setHeader
    // 如果客户端发现收到服务器的响应的状态码是 302 就会自动去响应头中找 Location ，然后对该地址发起新的请求
    // 所以你就能看到客户端自动跳转了
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  }
  else {
    fs.readFile('./views/404.html', (err, data) => {
      if (err) {
        return res.end('404 Not Found !')
      }
      res.end(data)
    })
  }
}).listen(3000, () => {
  console.log('running...');
})