### react:18.3.1 版本学习
    1,npm install -g create-react-app 如果本地原来没有react脚手架
    2,npm create-react-app <项目名称>
    3,cd <项目名称>
    4,npm start 启动项目
    5,code . vscode打开项目

插件
```
react：包含react所必须的核心代码
react-dom：react渲染在不同平台所需要的核心代码
babel：将jsx转换成React代码的工具
路由插件：npm install react-router-dom
ui框架: npm install antd --save
css使用：npm install --save-dev css-loader style-loader
scss使用(不需要安装，react支持)：npm install node-sass sass-loader --save-dev
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
