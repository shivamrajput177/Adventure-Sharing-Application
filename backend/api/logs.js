const {Router} = require('express')
const LogFile = require('../models/LogFile')

const router = Router()

// Get all users posts all the posts available 

router.get('/all',async (req, res,next) => {
    try {
        const logs = await LogFile.find()
        res.status(200).json(logs)
    } catch (error) {
        next(error)
    }
})

// My Posts which will be called upon click on user Profile

router.get('/user-posts/:id' ,async (req, res,next) => {
    try {
        console.log(req.params.id)
        const userId =  `${req.params.id}` 
        const userLogs = await LogFile.findById(userId)
        res.status(200).json(userLogs)
    } catch (error) {
        next(error)
    }
})

// creating new log post

router.post('/create-log',async (req,res,next)=>{
    try{
        const newLog = new LogFile(req.body)
        const createdLog = await newLog.save()
        res.json(createdLog)
    }catch(error){
        next(error)
    }
})


module.exports = router
