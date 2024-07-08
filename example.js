var http=require('http')
var fs=require('fs')
http.createServer (
    function(req,res){
        fs.readfile('example.txt',
        function(data){
            var filedata=data
        res.write(filedata)
        res.end();
    })
}
)