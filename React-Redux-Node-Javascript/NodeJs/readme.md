### Node Js 
1. Node Js is Server side Enviornment , for fast scalling app for real time 
2. I/O application , live streaming , event driven , Event Loop , Asyncrhronous , V8 Engine , CallBack 
3. EventEmitter:-
    Node js having some object which is emiting the events . All the object emits event are the instance of EventEmitter 

    Event Emiter is the class of event module , which is having some methods like On and Emit 
    On is for adding new events and emit is for firing the vent . 

    For example once we open a file with the help of fs.readStream() an event is emited 

    Event Emitter {work on event } 
        const event from "event"
        const EventEmitter = event.EventEmitter()
        1. On {Add new Event}
        2. Once {Add new Event once only}
        3. addListner {Add new Listener}
        4. removeListner {Remove Listener}
 
4. Buffer 
    Javascript is purely unicode But its not support binary data Or Octat Data , So Node Js has Provided us a 
    Buffer Class . In Which So many Methods are available for read,write,convert,concat,

    1. Creating Buffers
        Method 1
        Following is the syntax to create an uninitiated Buffer of 10 octets −

        var buf = new Buffer(10);
        Method 2
        Following is the syntax to create a Buffer from a given array −

        var buf = new Buffer([10, 20, 30, 40, 50]);
        Method 3
        Following is the syntax to create a Buffer from a given string and optionally encoding type −

        var buf = new Buffer("Simply Easy Learning", "utf-8");
    2. Writing to Buffers
        Syntax
        Following is the syntax of the method to write into a Node Buffer −

        buf.write(string[, offset][, length][, encoding])
        Parameters
        Here is the description of the parameters used −

        string − This is the string data to be written to buffer.

        offset − This is the index of the buffer to start writing at. Default value is 0.

        length − This is the number of bytes to write. Defaults to buffer.length.

        encoding − Encoding to use. 'utf8' is the default encoding.

5. Streams :-
    # Streaming is an object which takes data from source and send to destination in a continues Manner 

    Node jas has a mechanism to perform streaming of a file and write data in continious manner . 

    1. Readable :- stream used for Read operation 
    2. Writable :- stream used for Write operation
    3. Duplax :- both read and write opertaion
    4. Transform  :- kind of duplax some contrains output depend on input

    And there are 4 stage
    # Each Stream can perform different different event at different instance like 
    1. data 
    2. end
    3. error
    4. finish
    #### Example Read Stream:-
        var fs = require("fs");
        var data = '';

        // Create a readable stream
        var readerStream = fs.createReadStream('input.txt');

        // Set the encoding to be utf8. 
        readerStream.setEncoding('UTF8');

        // Handle stream events --> data, end, and error
        readerStream.on('data', function(chunk) {
        data += chunk;
        });

        readerStream.on('end',function() {
        console.log(data);
        });

        readerStream.on('error', function(err) {
        console.log(err.stack);
        });

        console.log("Program Ended");

    #### Example Write Stream @sunny:-
 <script>
    const fs = require("fs");
    const data = "New Updated Data"
    const fsWriteStream = fs.createWriteStream("test.txt");
    fsWriteStream.write(data,"utf8");
    fsWriteStream.end(data,"utf8");
    fsWriteStream.on(error,()=>{
        console.log(error)
    });
    fsWriteStream.on(finish,()=>{
        console.log("completed")
    });
</script>


6. file opertaion 
    fs = require fs 
    fs.open(path,flag,callback)
    fs.write(path,data,callback)
    1. fs.readFile(path,callback(err))
    2. fs.open(path,flag,mode,callback(fd,err))
    3. fs.writeFile(path,buffer,option,callback(err))
    4. fs.read(fd,buffer,offset,length,position , callback(err))
    const buffer = "this is test data "
    fs.open("test.txt",r+,utf8,callback(fd,err)=>{
        fs.read(fd,buffer, 0,buffer.length,0,callback(err)=>{
            fd.close(fd,callback()={

            })
        })
    })

7. utility :- there are so many important node utility module available which is usefull for building a node application 
    1. dns modlule
    2. path module :- return file path
    3. OS module 
    4. Domain Module


 
##### Creeate Virtual Server :-
1. require http 
2. http.createServer(req,res)=>{

}
3. listner 

##### File Read/write System :-
1. require fs 
2. http.createServer(req,res)=>{
3. fs.readFile(err,data)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.write(data)
    return res.end()
}
4. })
5. listner 

##### File Upload System :-
1. require formidable 
2. Create an Upload Form 
    1. enctype
    2. action 
    3. method 
3. 
<script>
    http.createServer(req,res)=>{
        if(req.url!="/upload"){
            res.writeHead(200,{"content-type":"text/html"})
            res.write(<Form enctype="multipart/form-data" action="upload" method="post">)
            res.write(<input type="file" name="file">)
            return res.end()
        }else {
            const form = new formidable.IncomingForm()
            form.parse(req,(err,fields,files)=>{
                const oldPath = files.fileToUpload.filePath
                const newPath = "C:/user/sunny/Project/"+files.fileToUpload.orignalFileName
                fs.rename(oldPath,newPath,(err)=>{
                    if(err){
                        res.write("Not Able To Move File")
                    }else {
                        res.write("File Sucessfully Moved")
                        res.end()
                    }
                })
                res.write("File Uploaded")
            })
        }
    }
    </script>
4. listner 

### Form data Post API 
<script>
    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');

    // Create application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.use(express.static('public'));
    app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
    })

    app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
    })

    var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
    })
    </script>

#### Major Differences Between require and import in JavaScript ??
   1. Import is the new ES6 feature we can import only named function and save memory 
   2. Import is Asynchronous and perform well
   3. Import is Lexical and Require in Non-Lexical 
   4. Import can't be use as conditional but Require can be . 
        Import is always run at the very beginning of the file and can’t be run conditionally. On the other hand, require can be used inline, conditionally,
   5. Require Throws error at runtime and Import throws error while parsing

    Require is more of dynamic analysis, and import is more of static analysis.
    Requires to stay where they have put the file, and imports get sorted to the top of the file.
    

# Express Js and its advantages :-
    https://www.geeksforgeeks.org/working-of-express-js-middleware-and-its-benefits/
    https://www.techomoro.com/what-are-the-benefits-of-using-express-js-for-backend-development/



    https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm

   ### Allows to set up middlewares to respond to HTTP Requests.
        
   1. we can add so many middleware in it for support HTTP Request , example OAuth-JW-Token 
        1. body-parser :- This middleware support to handle Json,Raw, Text , url-encoding
        2. cookie-parser ;- parse the cookie object and handle all cookie related operations
        3. multer :- This middleware helps to handle multipart/form-data . Upload form data , Move file from one one folder to another , upload a file . 

       # we need to write ".use" for above middleware like 
        var express = require('express');
        var app = express();
        var fs = require("fs");
        var cookieParser = require('cookie-parser')

        var bodyParser = require('body-parser');
        var multer  = require('multer');

        app.use(express.static('public'));
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(multer({ dest: '/tmp/'}));
        app.use(cookieParser())


    ### Defines a routing table which is used to perform different actions based on HTTP Method and URL.

    2. we can apply so many different HTTP methods which is more than normal Node JS
            get/post/put/delete/pitch
        in normal node js we create http.createServer in which we cant asume the Type of request but in Express jS we can easily get the type {get/post/put/delete/pitch} and we can perform appropriate action accordiangly. 
    ### Allows to dynamically render HTML Pages based on passing arguments to templates.

    4. Easily we can connect with backend like mysql,mongoDb,redis and other important Backend libraries like email,otp,OAuth,fileOperation.
