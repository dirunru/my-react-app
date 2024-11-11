### react:18.3.1 版本学习
    1,npm install -g create-react-app 如果本地原来没有react脚手架
    2,npm create-react-app <项目名称>
    3,cd <项目名称>
    4,npm start 启动项目
    5,code . vscode打开项目
### 创建react项目
    npm: npm create vite@latest <项目名：vite-react-ts> react-ts
    npm create vite@latest <项目名：vite-react> react
    yarn：yarn create vite <项目名：vite-react-ts--template> react-ts

    pnpm：pnpm create vite vite-react-ts-- --template react-ts
    1-| pnpm create vite：使用pnpm创建一个新的vite项目。
    2-| vite-react-ts：新项目的名称。
    3-| --template react-ts：指定项目模板为react-ts，这意味着创建的项目将包含一个基础的React项目结构，并且使用TypeScript作为编程语言。
    
    例如：yarn create vite vite-react react
---
    现在官网却推荐使用：creact-next-app:  npx create-next-app@latest <项目名称> 最新版本
    npm init vite



    
插件
```
react：包含react所必须的核心代码
react-dom：react渲染在不同平台所需要的核心代码
babel：将jsx转换成React代码的工具
路由插件：npm install react-router-dom
ui框架: npm install antd --save
css使用：npm install --save-dev css-loader style-loader
    css-loader: 会对 @import 和 url() 进行处理，就像 js 解析 import/require() 一样。
    style-loader:把 CSS 插入到 DOM 中。
scss使用(不需要安装，react支持)：npm install node-sass sass-loader --save-dev
mockjs: npm install mockjs --save 模拟数据

npm install nrm -g 配置npm镜像源管理
nrm ls 查看镜像源
nrm use ** 使用那个镜像源
nrm add <名称：cnpm> <地址:http://192.168.22.11:8888/repository/npm-public/>
nrm del <名称：cpm>
```

    react 生命周期：
    1、初始化：constructor()
      1.1、通过给 this.state 赋值对象来初始化内部的state；
      1.2、为事件绑定实例（this）；
    2、挂载：componentWillMount()：即将挂载到 DOM 节点之前调用
    3、挂载：componentDidMount()： 发送网络请求就最好的地方
      3.1、会在组件挂载后（插入 DOM 树中）立即调用
    4、更新：componentWillReceiveProps()：父组件更新时，子组件的这个生命周期会被调用
    5、更新：shouldComponentUpdate()：在组件接收到新的 props 之前被调用
    6、更新：componentWillUpdate()：在组件接收到新的 props 或者 state 之前被调用
    7、更新：componentDidUpdate()：会在更新后会被立即调用，首次渲染不会执行此方法
    8、卸载：componentWillUnmount()：在组件卸载及销毁之前直接调用。
      8.1、执行必要的清理操作：清除计时器、取消网络请求、清理 DOM 等等；
    9、错误处理：componentDidCatch()：捕获组件错误，渲染错误信息
--- 
    1、状态更新：setState()
    2、状态更新：forceUpdate()
    3、状态更新：getDerivedStateFromProps()
    4、状态更新：getSnapshotBeforeUpdate()
