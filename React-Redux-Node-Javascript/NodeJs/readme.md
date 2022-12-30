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