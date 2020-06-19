# mywebsite
##前言：
>因为最近正在做前端开发，发现公司里面用的都是vue了。反而最原始的html+css+js这种已经很少见了。有时候自己会做一些练习的小项目，如果按照vue脚手架来一遍的话，不仅搭建起来需要各种插件，而且项目打包出来后不管是体积还是性能都有些问题。因此，我想着自己就搭建一个简单的，可以快速实现前端开发的架子。

##现代前端不使用各种框架的搭建

###实现目标：js，css分离，热更新代码，静态资源服务器

1. 安装`nodejs，vscode`，这是最基本的配置了
2. 创建目录，运行 `npm init -y`,初始化npm项目工程，此时就可以随意使用npm包进行开发了。
3. 为什么要webpack呢？因为我们需要源码进行编译，需要开启服务，需要热更新，如果自己写的话需要大量时间。因此直接用webpack。
安装webpack，`npm i webpack webpack-cli -D`
4. 知道webpack的基本概念：入口，出口，加载器，插件；
增加webpack.config.js文件，这个是默认加载的。
此时项目样子：
![](https://img2020.cnblogs.com/blog/366651/202006/366651-20200616191949217-867718295.png)

5.webpack.config.js里面添加基本的配置，入口，出口
```
const path = require('path');
const config = {
entry:"./src/main.js",
output:{
path: path.resolve(__dirname, 'dist'),
filename: 'bundle.js'
},
module:{
}
}
module.exports = config;
```
到目前为止，基础的js开发环境已经搭好了。

6.我们创建html文件，将js引入进去
<!DOCTYPE html>
<html>
<head>
<title>你好，中国</title>
</head>
<body>
</body>
<script src="./dist/bundle.js"></script>
</html>

![](https://img2020.cnblogs.com/blog/366651/202006/366651-20200616192144507-1870024603.png)


运行，![](https://img2020.cnblogs.com/blog/366651/202006/366651-20200616192211672-1645560865.png)

基础的为本项目搭建完毕。可是此时并没有体现出工作流程的优越性。
* 我们需要自己手动添加js的引用
* 我们运行项目的时候还需要手动刷新打开
* 我们需要手动编译

7. 引入webpack-dev-serverdev-server
`npm install webpack-dev-server --save-dev`

![](https://img2020.cnblogs.com/blog/366651/202006/366651-20200616192341234-804487095.png)

注意这个，必须填写，路径必须写对，不然不生效

8.刚刚我们创建的项目，html是我们手动创建，并且加入js的。
这里我们使用另外一个插件，来解决这个问题；
![](https://img2020.cnblogs.com/blog/366651/202006/366651-20200616192424305-891209310.png)


尝试更改filename到dist目录，不行，因此把publicPath，contentBase改成了根目录，
这个时候插件才能成功


9.缺了个css，我们加入css。
css要在js文件里进行导入
import "./main.css";
console.log("你好");

然后生成的结果：
![](https://img2020.cnblogs.com/blog/366651/202006/366651-20200616192436215-194971074.png)

样式是内嵌到代码里面的；
![](https://img2020.cnblogs.com/blog/366651/202006/366651-20200616192505944-1136496753.png)

再来一个插件

上面实现了基本的html+css+js开发的条件；


>我们看到，为了实现现代前端，我们新增了很多工具来完成开发；webpack现在越来越复杂了，配置项让人眼花缭乱，各种插件层出不穷。
然而，基本的架子，上面都已经可以满足了。如果有更多需求，只能增加各种配置了。


