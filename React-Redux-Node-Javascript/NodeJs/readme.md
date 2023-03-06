### Node Js 
1. Node Js is Server side Enviornment , for fast scalling app for real time 
2. I/O application , live streaming , event driven , Event Loop , Asyncrhronous , V8 Engine , CallBack 
3. Event Emitter {work on event } 
    const event from "event"
    event.EventEmitter()
    1. On
    2. Once 
    3. addListner
    4. removeListner

4. Buffer 

5. Streams :-
    Node jas has a mechanism to perform streaming of a file and write data in continious manner . 

    1. Readable :- stream used for Read operation 
    2. Writable :- stream used for Write operation
    3. Duplax :- both read and write opertaion
    4. Transform  :- kind of duplax some contrains output depend on input

    And there are 4 stage

    1. data 
    2. end
    3. error
    4. finish
    #### Example :-
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
6. file opertaion 
    fs = require fs 
    fs.open(path,flag,callback)
    fs.write(path,data,callback)

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
3. http.createServer(req,res)=>{
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
4. listner 

#### Major Differences Between require and import in JavaScript ??
   1. Import is the new ES6 feature we can import only named function and save memory 
   2. Import is Asynchronous and perform well
   3. Import is Lexical and Require in Non-Lexical 
   4. Import can't be use as conditional but Require can be . 


    Require is more of dynamic analysis, and import is more of static analysis.
    Require Throws error at runtime and Import throws error while parsing
    Require is Nonlexical and Import is Lexical
    Requires to stay where they have put the file, and imports get sorted to the top of the file.
    Import is always run at the very beginning of the file and can’t be run conditionally. On the other hand, require can be used inline, conditionally,

# Express Js and its advantages :-
    https://www.geeksforgeeks.org/working-of-express-js-middleware-and-its-benefits/
    https://www.techomoro.com/what-are-the-benefits-of-using-express-js-for-backend-development/



    https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm

   ### Allows to set up middlewares to respond to HTTP Requests.
        
   1. we can add so many middleware in it for support HTTP Request , example OAuth-JW-Token 
        1. body-parser :- This middleware support to handle Json,Raw, Text , url-encoding
        2. cookie-parser ;- parse the cookie object and handle all cookie related operations
        3. multer :- This middleware helps to handle multipart/form-data

    ### Defines a routing table which is used to perform different actions based on HTTP Method and URL.

    2. we can apply so many different HTTP methods which is more than normal Node JS
            get/post/put/delete/pitch
        in normal node js we create http.createServer in which we cant asume the Type of request but in Express jS we can easily get the type {get/post/put/delete/pitch} and we can perform appropriate action accordiangly. 
    ### Allows to dynamically render HTML Pages based on passing arguments to templates.

    4. Easily we can connect with backend like mysql,mongoDb,redis and other important Backend libraries like email,otp,OAuth,fileOperation.
