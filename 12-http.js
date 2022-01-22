const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to home page')

    }
    // console.log(req)
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    // not working
    res.end(`
    <h1>Oops</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    // res.write('Welcome to our home page')

})

server.listen(5000)