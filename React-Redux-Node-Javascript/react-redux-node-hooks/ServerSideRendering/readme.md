https://www.youtube.com/watch?v=ObrSuDYMl1s&ab_channel=Smoljames

https://www.smashingmagazine.com/2016/03/server-side-rendering-react-node-express/

https://www.youtube.com/watch?v=NwyQONeqRXA&ab_channel=MaksimIvanov

# How to create a React Server side Rendering App 
1. Webpack 
2. Babel {preset}
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/register ignore- styles 
3. Create React App at place of ReactDom.render we need to use ReactDom.hydrate
4. Create Server folder with 
    1. server.js 
        1. import express 
        https://github.com/satansdeer/ssr-example/blob/master/server/server.js
    2. index.js 
        1. import ignore-style
 <script>  
        require('ignore-styles')

        require('@babel/register')({
            ignore: [/(node_module)/],
            presets: ['@babel/preset-env', '@babel/preset-react']
        })

        require('./server')
        </script>
5. Package json 
    1. in script add ssr: "node server/index"