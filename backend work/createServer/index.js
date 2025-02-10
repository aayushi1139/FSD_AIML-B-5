const http=require('http');
const PORT=2500;
const server=http.createServer((req,res)=>{
    res.write("Welcome");
    res.end("Request ended");
})
server.listen(PORT,()=>{
    console.log("server is running on"+PORT);
})