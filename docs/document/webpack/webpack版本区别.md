
# webpack版本区别

## 简介
	Webpack1到2最大的升级是tree-shaking，其次是配置文件的对象化，再其次包括插件的写法优化（loader）。Webpack2到3的最大升级是scope-hoisting。3到4简化了整个打包配置操作。

## 1. w1与w2的区别
	w2引入了tree-shaking技术，打包的时候只会打包相应（有使用到的）的fun&变量。

::: warning
ps：tree-shaking默认不会触发、在webpack3，你需要配置babel，uglifyjs-webpack-plugin等才能触发。在webpack4，production模式默认触发。
:::

## 2. w2与w3的区别
	w3引入了scope-hoisting技术，作用域提升。说到底，javascript的模块化就是通过闭包来实现作用域的隔离，但是当我们模块化程度达到一定程度之后，过多闭包会让某些变量没法销毁，造成性能劣势。作用域提升即是把两个闭包合成一个闭包。

::: warning
ps：如果在项目中使用webpack3，需要开启webpack.optimize.ModuleConcatenationPlugin来满足作用域提升的功能。如果在项目中使用webpack4，在开发模式即是关闭作用域提升，在生产模式开启该功能。
:::

## 3. w3与w4的区别
	1. 增加了mode配置，有develop和production两种值，表明两种生产环境。  
	2. CommonsChunkPlugin废除，通过optimization.splitChunks来代替（CommonsChunkPlugin：减少build.js的体积，打包第三方包）。
	3. mini-css-extract-plugin（CSS文件提取）：删除原 extract-text-webpack-plugin 配置，增加 mini-css-extract-plugin 配置。
	4. 安装依赖命名方式更改。
	5. vue-loader的使用方式更改。
	6. UglifyJsPlugin：废除了，使用optimization.minimize为true。
	7. 移除loaders，使用rules来代替。
	8. 支持es6的方式导入JSON文件，并且可以过滤无用的代码。
	9. 升级happypack插件（happypack）可以进行多线程打包。
