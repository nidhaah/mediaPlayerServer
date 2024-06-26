//1) import json server - library
const jsonServer = require('json-server')

//2) create path for db.json file using router method - for storing data
const router = jsonServer.router("db.json")

//3) create a middleware to convert json to js - defaults()
const middleware = jsonServer.defaults()

//4) create json server
const mediaPlayerServer = jsonServer.create()

//5) server should use middleware and router
//first use middleware then router
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//6) set port for server default - 3000
PORT = 3000 || process.env.PORT

//7) run server 
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server successfully running at port number ${PORT}`);
})
