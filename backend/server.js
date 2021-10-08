const app = require('express')()
const express = require('express')
const dotenv = require('dotenv')

const cors = require('cors')


app.use(cors())

dotenv.config()
 

// const app =express()


const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
// app.listen(process.env.PORT || 5000, console.log(`Server Running on ${process.env.NODE_ENV} mode PORT ${process.env.PORT || 5000}`))


