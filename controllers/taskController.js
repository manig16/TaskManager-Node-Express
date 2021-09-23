const getAllTasks = (req,res) => {
    res.send('get all tasks')
}

const getTask = (req, res) => {
    res.json({id: req.params.id})
}

const createTask = (req, res) => {
    res.json(req.body)
}

const updateTask = (req, res) => {
    res.json(req.body)
}

const deleteTask = (req, res) => {
    res.json(req.body)
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}