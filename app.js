const express = require('express')
const app = express()
const tasks = require('./routes/taskRoute')
const connectMongoDB = require('./database/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')

const port = 3000

// middleware
app.use(express.json())


// routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)



const start = async() => {
    try {
        await connectMongoDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on port ${port}`))
    } catch (error) {
        console.log(err)
    }
}

start()
