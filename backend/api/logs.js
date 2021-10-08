const {Router} = require('express')
const LogFile = require('../models/LogFile')

const router = Router()

router.get('/',(req,res)=>{
    res.json({
        message : 'Api Endpoint  : Welcome Home ',
    });
});

router.post('/',async (req,res,next)=>{
    try{
        const newLog = new LogFile(req.body)
        const createdLog = await newLog.save()
        res.json(createdLog)
    }catch(error){
        next(error)
    }

    
})


module.exports = router
