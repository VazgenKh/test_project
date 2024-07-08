import  http from "http"

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    if(req.url === "/hello"){
        res.writeHead(200,{'contentType':'text/plain'})
        res.end("seesionn")
    }else if(req.url === '/nono'){
        res.writeHead(200,{'contentType':'application/json'})
        res.end(JSON.stringify({
            name:'Fox'
        }));
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});