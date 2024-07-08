var http=require('http');
http.createServer (
    function(req,res){
        res.write("first program");
        res.end();
    }
).listen(8082)