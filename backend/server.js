const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()


dotenv.config()

const middlewares = require('./middlewares')

const userRoutes = require('./routes/userRoutes')
const logRoutes = require('./routes/logRoutes')

mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser : true,
  useUnifiedTopology : true,
}).then(()=>{console.log("Database Connected !! ")})
.catch((err)=>console.log("Databse Not Connected !!! "))


app.use(cors())
app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded());


const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
  res.json({
    message:'Home Page',
  })
})

// app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)

app.use(middlewares.urlNotFound)
app.use(middlewares.statusError)

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)


