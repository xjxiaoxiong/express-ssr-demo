import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './component/Home';
// const Home = require('./component/home')
import Login from './component/Login'
import { renderRoutes } from "react-router-config";

// 根组件
const Root = ({ route }) => (
    <div>
        <div>
            <Link to="/home">home</Link>
        </div>
        <div>
            <Link to="/login">login</Link>
        </div>
        {renderRoutes(route.routes)}
    </div>
);

export const routes = [
    {
        breadcrumb: '首页',
        path: "/",
        component: Root,
        routes: [
            {
                path: "/home",
                exact: true,
                component: Home,
                loadData: Home.loadData,//服务端获取异步数据的函数
            },
            {
                path: "/login",
                component: Login,
                exact: true,
                // routes: [
                //   {
                //     path: "/child/:id/grand-child",
                //     component: GrandChild
                //   }
                // ]
            }
        ]
    }
];

export default (
    <div>
        { renderRoutes(routes) }
    </div>
)