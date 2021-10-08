
const urlNotFound = (req,res,next)=>{
    const err = new Error(`Path not Found ${req.originalUrl}`)
    res.status(404)
    next(err)
  }

const statusError = (error,req,res,next)=>{
    const stCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(stCode)
    res.json({
      message : error.message,
    })
  }

module.exports = {
    urlNotFound,
    statusError,
}