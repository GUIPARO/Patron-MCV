const express = require('express');
const app= express();
const path = require('path');
const port = process.env.PORT || 3000;
const rutas = require("./router/index.routes")

app.use(express.static(path.resolve(__dirname,'./public')))

app.use('/',rutas)

app.listen(port,()=> console.log('server is listen on port 3000'));
    
