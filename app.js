const express = require('express')
const app = express()
const tasks = require('./routes/taskRoute')

const port = 3000

app.use(express.json())

app.get('/hello',(req,res)=> {
    res.send("Task Manager API")
})

app.use('/api/v1/tasks', tasks)

// get all tasks
// get one task
// add a task
// update a task
// delete a task

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})