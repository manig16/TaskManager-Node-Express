const express = require('express')
const app = express()
const tasks = require('./routes/taskRoute')
const connectMongoDB = require('./database/connect')
require('dotenv').config()

const port = 3000

app.use(express.json())

app.use('/api/v1/tasks', tasks)

// get all tasks
// get one task
// add a task
// update a task
// delete a task

const start = async() => {
    try {
        await connectMongoDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on port ${port}`))
    } catch (error) {
        console.log(err)
    }
}

start()
