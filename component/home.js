/*// const React = require('react');
import React from 'react';
// const Page = require('./Page')
import Login from './Login'
import useLayoutEffect from './use-isomorphic-layout-effect'
// const useLayoutEffect = require('./use-isomorphic-layout-effect');

const Home = (props) => {
    const { useState, useLayoutEffect } = React;
    // const [c, setC] = useState('1')
    /!*useLayoutEffect(() => {
        console.log('window', window)
        // setC('2')
    }, [])*!/

    return (
        <div className={props.className}>
            <div>This is home</div>
            <div>This is home222</div>
            <button onClick={() => {alert('666')}}>click</button>
            {/!*<div>{c}</div>*!/}
            <Login/>
        </div>
    )
}

// module.exports = Home;
export default Home;*/

import { connect } from 'react-redux';
import { getHomeList } from '../store/home/actions'
import React, { useEffect } from "react";
import Login from './Login'
// import styles from './home.less';
// import './home.less';

class Home extends React.Component{
    /*UNSAFE_componentWillMount(){
        // 通过这个属性可以判断是在服务端调用
        if(this.props.staticContext) {
            const styles = require('./home.less');
            console.log('styles', styles._getCss(), styles._getContent(), styles._insertCss());
            // console.log('this.props.staticContext', this.props.staticContext);
            // 给服务端注入的变量 staticContext 的 css属性中加入 css文本
            this.props.staticContext.css.push(styles._getCss());
        }
    }*/
    // 预加载数据，服务端调用
    static async loadData(store, match) {
        console.log('store.dispatch', store.dispatch);
        // 参数 match 是当前匹配路由的信息
        return store.dispatch(getHomeList())
    }

    componentDidMount(){
        console.log('this.props.home.list.length', this.props.home.list.length)
        if(!this.props.home.list.length) {
            this.props.getHomeList()
        }
    }
    render(){
        const props = this.props;
        return (
            <div>
                <div className="title">This is home</div>
                <div> {!!props.home.list.length && props.home.list.map(item => <div key={item}>{item}</div>)} </div>
                <button onClick={() => {
                    props.getHomeList();
                    console.log('props.home.list', props.home.list);
                }}>click me</button>
                <div><button className="alert-me" onClick={() => alert('hhhhhh')}>alert</button></div>
                {/*<Login />*/}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        home: state.home
    }
}
export default connect(mapStateToProps, {
    getHomeList
})(Home)
