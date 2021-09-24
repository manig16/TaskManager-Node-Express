const express = require('express')
const app = express()
const tasks = require('./routes/taskRoute')
const connectMongoDB = require('./database/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlingMiddleware= require('./middleware/error-handler')

const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlingMiddleware)



const start = async() => {
    try {
        await connectMongoDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on port ${port}`))
    } catch (error) {
        console.log(err)
    }
}

start()
