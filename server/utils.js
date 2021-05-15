import { Provider } from 'react-redux';
import Routes, { routes } from '../router'
import { renderToString } from 'react-dom/server';
//重要是要用到StaticRouter
import { StaticRouter } from 'react-router-dom';
import React from 'react'
import { matchRoutes } from "react-router-config";
import { getServerStore } from '../store';
import manifest from '../dist/manifest.json';

// 改造这里 服务端做数据预取
const loadBranchData = (pathname, store) => {
    // 使用 matchRoutes api做路由匹配
    const branch = matchRoutes(routes, pathname)

    // console.log('branch', branch);
    const promises = branch.map(({ route, match }) => {
        console.log('route', route.loadData);
        // 判断匹配的路由是否挂载有异步加载数据逻辑
        return route.loadData
            ? route.loadData(store, match) // 把store 和 match 传入数据预取函数
            : Promise.resolve(null)
    })

    return Promise.all(promises)
}

export const render = (req, res) => {
    const store = getServerStore();
    const context = { css: [] };
    // console.log('req', req.headers.cookie);

    // 加载完数据后，再把组件生成字符串返回，现在返回的组件都是有数据的结果
    loadBranchData(req.baseUrl, store).then((data) => {
        // 到这里所有的数据预加载完毕
        // 数据加载完毕后再渲染组件
        const string = getRenderString()
        // console.log('string', string);
        res.send(string);
    }).catch((_err) => {
        console.log(_err)
        res.send('loadBranchData_error');
    })

    // 下面的是拼接出一个完整的 HTML 并发送给浏览器
    const renderLink = () => {
        return Object.keys(manifest)
            .filter(key => /\.css$/.test(key))
            .map(key => `<link rel="stylesheet" href="${manifest[key]}">`)
            .join('\n');
    };
    console.log('renderLink', manifest, renderLink())

    function getRenderString() {
        const content = renderToString(
            // Warning 这里的 store 一定要和 loadBranchData 的store一致，因为预取的数据要在流到组件中，组件再被生成字符串返回
            // 如果这两个store不一致，将即使数据预取成功，也没有再次流到组件中
            <Provider store={store}>
                <StaticRouter location={req.baseUrl} context={context}>
                    {Routes}
                </StaticRouter>
            </Provider>
        );
        // 服务端的 renderToString执行完后 context中已经被注入了数据
        // const cssStr = context.css.length ? context.css.join('\n') : '';
        // 数据注水
        const hydrate = `
      window.initialState = ${JSON.stringify(store.getState())};
    `
        // <!--          <style>${cssStr}</style>-->
        return `
      <html>
        <head>
          <title>ssr</title>
          ${renderLink()}
        </head>
        <body>
        <div id="root">${content}</div>
          <script>
            // Warning 这个script一定不能放到后面，它必须在客户端代码执行之前注水数据
            ${hydrate}
          </script>
          <script src="/index.js"></script>
        </body> 
      </html>
    `
    }
}
// <div id="root">${content}</div><script src="/index.js"></script>