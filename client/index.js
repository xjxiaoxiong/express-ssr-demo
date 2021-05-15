import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// import Home from '../component/Home';
import Router from '../router'
import { Provider } from 'react-redux';
import { getClientStore } from '../store'

const App = () => {
    const store = getClientStore();
    console.log('store', store);
    return (
        <Provider store={store}>
            <BrowserRouter>
                {Router}
            </BrowserRouter>
        </Provider>
    )
}
/*
const App = () => {
    return <Home />
}
*/

ReactDom.hydrate(<App />, document.getElementById('root'))
// ReactDom.render(<App />, document.getElementById('root'))

