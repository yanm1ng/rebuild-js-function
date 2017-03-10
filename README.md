### 重写常用的一些JavaScript函数

例如：
### ajax

创建AJAX基本流程：

1. 构建 XMLHttpRequest 对象
2. 创建一个新的 HTTP 请求，并指定该请求的方法（如：GET、POST）、URL和请求头等信息
3. 设置响应 HTTP 请求状态变化的函数
4. 发送 HTTP 请求
5. 获取异步的响应数据
6. 使用 DOM 操作进行局部刷新

[ajax.js](https://github.com/yanm1ng/rebuild-js-function/blob/master/ajax.js)

