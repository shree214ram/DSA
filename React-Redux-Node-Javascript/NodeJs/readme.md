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