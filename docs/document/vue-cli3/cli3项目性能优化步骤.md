# cli3项目性能优化步骤
>通过一些减少方法项目运行上的性能消耗

1. 减少第三方插件的使用，尽可能使用原生代码，比如不使用vuex，用new Vue实例来代替，自己封装format来代替moment等

2. js,css代码的最小化压缩和分割（splitchunks，UglifyJsPlugin）

3. js,css代码公用代码提取, 按需引入(cdn加载：externals)

4. 图片文件的压缩（image-webpack-loader）

5. gzip的压缩（compression-webpack-plugin）

6. registerServiceWorker 离线缓存优化（解决网络离线而访问不了页面问题）