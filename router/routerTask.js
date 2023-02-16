const express = require("express")
const task = require("../controller/taskController")
const router = express.Router()

router.route("/")
.get(task.getAllTasks)
.post(task.addTask)

module.exports = router