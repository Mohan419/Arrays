var express = require ('express');
var app = express.Router();
var arraydata = require ('../controllers/data/callback');
app.post('/insert',(req,res)=>{
    if(typeof req.body === 'undefined'){
        res.json({result:'0',message:'no request content'});
    }else{
        arraydata.arraydatacallback(req.body,result=>{
        if(result.status === 400){
            res.statusCode = result.status;
            res.send(result.data.message);
            return;
        }
        res.send(result.data);
    })
    }
})

app.post('/update',(req,res)=>{
    if(typeof req.body === 'undefined'){
        res.json({result:'0',message:'no request content'});
    }else{
        arraydata.arraydataupdatecallback(req.body,result=>{
        if(result.status === 400){
            res.statusCode = result.status;
            res.send(result.data.message);
            return;
        }
        res.send(result.data);
    })
    }
})

app.get('/get',(req,res)=>{
    if(typeof req.body === 'undefined'){
        res.json({result:'0',message:'no request content'});
    }else{
        arraydata.arraydatagetcallback(req.body,result=>{
        if(result.status === 400){
            res.statusCode = result.status;
            res.send(result.data.message);
            return;
        }
        res.send(result.data);
    })
    }
})


app.post('/insertDevice',(req,res)=>{
    if(typeof req.body === 'undefined'){
        res.json({result:'0',message:'no request content'});
    }else{
        arraydata.insertDevice(req.body,result=>{
        if(result.status === 400){
            res.statusCode = result.status;
            res.send(result.data.message);
            return;
        }
        res.send(result.data);
    })
    }
})



module.exports = app;