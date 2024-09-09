const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our hom4page')
    }
   if(req.url === '/about'){
    res.end('Here is short history')
   }
   res.end(`
   <h1>oops!</h1>
   <p> We cna't seem to find the page you are looking for</p>
   <a href="/"> back home</a>
   `)
})

server.listen(5000)
