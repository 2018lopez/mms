const express = require('express'),
    PORT = 3004,
    cors = require('cors')
    bodyParser = require('body-parser'),
    server = express(),
    router = require('./router/router')

    server.use(bodyParser.json())
    .use(router)
    .use(cors)
    .use(bodyParser.urlencoded({extended : true}))
    .listen(PORT,()=>console.log(
            `[+] server started on port ${PORT} 
            [http://localhost:${PORT}]`
        )
    )

