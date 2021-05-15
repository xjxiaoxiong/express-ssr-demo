require('@babel/register');
const express = require('express');
// const React = require('react');
// const { renderToString } = require('react-dom/server')
// require("node-jsx").install()
const { render } = require('./utils');
// const Home =  require('../component/Home');
const app = express()
app.use(express.static('dist'));

// const content = renderToString(React.createElement(Home));
/*app.use('/', function(req, res, next){
    res.send(
        `
     <html>
       <head>
         <title>ssr</title>
       </head>
       <body>
       <div id="root" />
       <script src="/index.js"></script>
       </body>
     </html>
    `
    );
})*/

app.get('/api/list', function(req, res, next) {
    res.json({
        data: [11,22,33]
    })
})

app.use('*', function(req, res, ctx) {
    if(req.baseUrl === '/favicon.ico') return res.end()
    // res.send(render(req))
    render(req, res)
})


app.listen(3001, () => {
    console.log('listen on port 3001')
})