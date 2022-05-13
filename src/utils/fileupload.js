
const multer=require('multer');
const path=require('path');
const fs=require('fs');
const storage=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,path.join(__dirname,"../uploads"))
    },
    filename:function(req,file,callback){

        const uniqueprefix = Date.now() + '-' + Math.round(Math.random() * 1e9)
        callback(null, uniqueprefix +"-"+file.originalname);

       
    }
})


const filefilter=function(req,file,callback){
    if(file.mimeType=="image/jpeg" || file.mimeType=="image/png"){
        callback(null,true)
    }else{
        callback(null,false)
    }
};




const upload=multer({
    storage: storage,
    limits:{
        filesize:1024*1024*3
    },
    filefilter:filefilter
});

module.exports = upload;